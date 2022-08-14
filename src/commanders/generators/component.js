import { NotationService, PromptService, FileService } from "../../utils";
import { getTemplate } from './templates';

const FILES = [
    { name: '{name}.tsx', type: 'component' },
    { name: '{name}.stories.tsx', type: 'storybook' },
    { name: '{name}.module.scss', type: 'scss-module' },
    { name: `index.tsx`, type: 'index' }
];

export const generateComponent = (path) => {
    const idx = path.lastIndexOf('/');
    const name = NotationService.toPascal(path.slice(idx+1));
    const fileTypes = FILES.map(e => e.type);
    
    PromptService.ask([
        {
            type: 'multiselect',
            name: 'files',
            message: '생성할 파일들을 선택해주세요.',
            choices: fileTypes,
            initial: fileTypes
        },
        {
            type: 'confirm',
            name: 'hasChildren',
            message: '컴포넌트 파일이 Children Prop을 가지나요?',
        }
    ])
    .then((answers) => {
        createFiles({ 
            files: answers.files, 
            args: {
                path,
                name,
                hasChildren: answers.hasChildren,
                useScssModule: answers.files.includes('scss-module')
            }
        })
    });
}


const createFiles = ({ files, args }) => {
    if (!files || files.length === 0) {
        throw new Error('선택한 파일이 없습니다.');
    }

    const { path, name } = args;

    FileService.create(
        files
            .map(type => FILES.find(e => e.type === type))
            .map(file => {
                const fileName = file.name.replace('{name}', name);
                const template = getTemplate(file.type, args);
                return { 
                    path, 
                    name: `${fileName}`,
                    template 
                };
            })
    );
}

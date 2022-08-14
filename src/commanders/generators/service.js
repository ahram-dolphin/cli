import { NotationService, FileService } from "../../utils";
import { generateCommon } from "./common";

export const generateService = (fullPath) => {
    generateCommon(fullPath, 'service');

    const idx = fullPath.lastIndexOf('/');
    const path = fullPath.slice(0, idx);
    const serviceFileName = `${NotationService.toKebab(fullPath.slice(idx+1))}.service`;
    const serviceName = `${NotationService.toPascal(fullPath.slice(idx+1))}Service`;

    const indexes = [
        'index.ts',
        'index.tsx',
        'index.js',
        'index.jsx',
    ];

    for (let i=0; i < indexes.length; i++) {
        const file = `${path}/${indexes[i]}`;
        if (FileService.exist(file)) {
            FileService.addContentToFile(
                file, 
                `\nexport * as ${serviceName} from './${serviceFileName}';`
            );
            break;
        }
    }
}
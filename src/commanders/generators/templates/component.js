import { toPascal } from "../../../utils/notation"

export const component = ({ name, hasChildren, useScssModule }) => {
    return `${hasChildren ? `import { PropsWithChildren } from "react";
` : ''}
${useScssModule ? `import styles from './${name}.module.scss;` : ''}

interface ${name}Props {}

export default function ${name}({}: ${hasChildren ? `PropsWithChildren<${name}Props>` : `${name}Props`}) {
    return ();
}`
}

export const index = ({ name }) => {
    return `import ${name} from './${name}';

export default ${name};`
}

export const storybook = ({ name, path }) => {
    const storybookPath = path
        .split('/')
        .map((e, i) => i === 0 ? e.toUpperCase() : toPascal(e))
        .join('/');
    
    return `import { ComponentStory, Meta } from '@storybook/react';

import ${name} from './index';
    
export default {
    component: ${name},
    title: '${storybookPath}',
} as Meta;

const Template: ComponentStory<typeof ${name}> = (args) => <${name} {...args} />;

export const Playground = Template.bind({});

export const Default = () => <${name} />;
`;
}

export const scssModule = () => {
    return ``;
}
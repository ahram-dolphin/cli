import { toPascal } from "../../../utils/notation"

export const error = ({ name }) => {
    const errorName = `${toPascal(name)}`;
    
    return `export default class ${errorName}Error extends Error {
    constructor(msg?: string) {
        const message = \`[${errorName}]: \$\{msg\}\`;
        super(message);
    }
}`
}
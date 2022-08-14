import { toPascal } from "../../../utils/notation"

export const constant = ({ name }) => {
    const constName = `${toPascal(name)}`;
    
    return `const ${constName} = {};

export default ${constName};`
}
import { toPascal } from "../../../utils/notation"

export const guard = ({ name }) => {
    const guardName = `${toPascal(name)}Guard`;
    
    return `export default function ${guardName}() {
    return true;
}`
}
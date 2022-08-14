import { toPascal } from "../../../utils/notation"

export const model = ({ name }) => {
    return `export default class ${toPascal(name)} {
  constructor(res: any) {}
}`
};
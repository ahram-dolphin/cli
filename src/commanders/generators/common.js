import { NotationService } from "../../utils";
import { getTemplate } from "./templates";
import { create } from "../../utils/fs";

export const generateCommon = (fullPath, type) => {
    const idx = fullPath.lastIndexOf('/');
    const name = fullPath.slice(idx+1);
    const path = fullPath.slice(0, idx);

    create([
        { 
            path: `${path}`, 
            name: `${NotationService.toKebab(name)}.${type}.ts`,
            template: getTemplate(type, { name })
        }
    ]);
}
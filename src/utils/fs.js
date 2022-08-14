#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { PromptService } from './index';

export const exist = (dir) => {
    try {
        fs.accessSync(dir, fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK);
        return true;
    } catch (e) {
        return false;
    }
};

const mkdir = (dir) => {
    const dirname = path
        .relative('.', path.normalize(dir))
        .split(path.sep)
        .filter(p => !!p);

    dirname
        .forEach((d, idx) => {
            const pathBuilder = dirname.slice(0, idx + 1).join(path.sep);
            if (!exist(pathBuilder)) {
                fs.mkdirSync(pathBuilder);
            }
        });
};

const write = (path, content) => {
    fs.writeFileSync(path, content);
    PromptService.log(`[Created]: ${path}`, 'bgGreen');
}

export const addContentToFile =  (path, content) => {
    if (exist(path)) {
        fs.appendFileSync(path, `\n${content}`);
        PromptService.log(`[Updated]: ${path}`, 'green');
    }
}

export const create = (files) => {
    files.forEach(file => {
        mkdir(file.path);
        write(`${file.path}/${file.name}`, file.template)
    });
}
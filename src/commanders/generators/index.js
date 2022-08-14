#!/usr/bin/env node

import { generateComponent } from './component';
import { generateCommon } from './common';
import { generateService } from './service';


const GENERATOR = {
    component: generateComponent,
    model: (path) => { generateCommon(path, 'model') },
    error: (path) => { generateCommon(path, 'error') },
    const: (path) => { generateCommon(path, 'constant') },
    guard: (path) => { generateCommon(path, 'guard') },
    service: generateService
};

export const generate = (type, path) => {
    let generator = GENERATOR[type];

    if (!generator) {
        throw new Error(`${type}은 지원하지 않는 파일 유형입니다.`);
    }

    generator(path);
}


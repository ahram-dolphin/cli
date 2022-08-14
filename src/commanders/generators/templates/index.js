import { component, index, storybook, scssModule } from './component';
import { model } from './model';
import { error } from './error';
import { constant } from './constant';
import { service } from './service';
import { guard } from './guard';

const generator = {
    component,
    index,
    storybook,
    [`scss-module`]: scssModule,
    model,
    error,
    constant,
    service,
    guard
}

export const getTemplate = (type, args) => {
    return generator[type](args);
}
#!/usr/bin/env node
import { prompt } from 'enquirer';
import chalk from 'chalk';

export const ask = (questions) => {
    return prompt(questions);
}

export const log = (message, color = 'green' | 'red') => {
    const fontColor = chalk[color] || undefined;
    console.log(fontColor ? fontColor(message) : message);
}
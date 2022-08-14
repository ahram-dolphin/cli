import { Command } from 'commander';
import { generate } from './commanders/generators';

const program = new Command();

program
    .name('귀차니즘들을 위한 리액트 CLI')
    .version('0.0.1');

program
    .command('generate')
    .description('기본 템플릿으로 파일을 생성함')
    .argument('<type>', '유형: component(c) | model | const | service | guard | error')
    .argument('<path>', '경로: 현재 위치 기준 + 파일 이름(유형 제외)')
    .action((type, path) => {
        if (type === 'c') {
            type = 'component';
        }
        generate(type, path)
    });

program
    .command('g')
    .argument('<type>', '유형: component(c) | model | const | service | guard | error')
    .argument('<path>', '경로: 현재 위치 기준 + 파일 이름(유형 제외)')
    .action((type, path) => {
        if (type === 'c') {
            type = 'component';
        }
        generate(type, path)
    });


program.parse();

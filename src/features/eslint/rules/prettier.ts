import type { ESLintConfig } from '../types';

const devDependencies = {
  'eslint-config-prettier': '',
};

const config: ESLintConfig = {
  extends: ['prettier'],
};

export { config, devDependencies };

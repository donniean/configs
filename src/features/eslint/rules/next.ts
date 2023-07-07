import type { ESLintConfig } from '../types';

function getDevDependencies() {
  return {
    '@next/eslint-plugin-next': '',
  };
}

function getConfig(): ESLintConfig {
  return {
    extends: [
      /* https://nextjs.org/docs/app/building-your-application/configuring/eslint#migrating-existing-config */
      'plugin:@next/next/recommended',
      'plugin:@next/next/core-web-vitals',
    ],
  };
}

export { getConfig, getDevDependencies };

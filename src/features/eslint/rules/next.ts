import type { ESLintConfig } from '../types';

function getDevDependencies() {
  return {
    // '@next/eslint-plugin-next': '',
  };
}

function getConfig(): ESLintConfig {
  return {
    extends: [
      /* https://nextjs.org/docs/app/building-your-application/configuring/eslint#migrating-existing-config */
      /* https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/index.js */
      // 'plugin:@next/next/recommended',
      // 'plugin:@next/next/core-web-vitals',
      // 'next',
      // 'next/core-web-vitals',
    ],
  };
}

export { getConfig, getDevDependencies };

import type { FeaturePackageJson } from '@/types/feature-configs';

export function getPackageJson(): FeaturePackageJson {
  return {
    scripts: {
      'lint:eslint': 'eslint "**/*.{js,jsx,ts,tsx,mjs,cjs}"',
      'lint:eslint:fix': 'eslint --fix "**/*.{js,jsx,ts,tsx,mjs,cjs}"',
    },
    devDependencies: {
      eslint: '',
    },
  };
}

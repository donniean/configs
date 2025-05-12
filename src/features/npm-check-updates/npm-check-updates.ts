import type { FeaturePackageJson } from '@/types/feature-configs';

export function getPackageJson(): FeaturePackageJson {
  return {
    scripts: {
      ncu: 'ncu --deep',
      'ncu:upgrade': 'npm run ncu -- --upgrade',
    },
    devDependencies: {
      'npm-check-updates': '',
    },
  };
}

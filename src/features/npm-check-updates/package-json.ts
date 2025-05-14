import type { FeaturePackageJson } from '@/types/feature-configs';

export function getPackageJson(): FeaturePackageJson {
  return {
    scripts: {
      'deps:check': 'ncu --deep',
      'deps:upgrade': 'npm run ncu -- --upgrade',
    },
    devDependencies: {
      'npm-check-updates': '',
    },
  };
}

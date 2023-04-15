import type { FeaturePackageJson } from '@/types/feature-configs';

export function getPackageJson(): FeaturePackageJson {
  return {
    scripts: {
      'pre-commit': 'lint-staged --concurrent false',
    },
    devDependencies: {
      'lint-staged': '',
    },
  };
}

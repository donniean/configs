import type { FeaturePackageJson } from '@/types/feature-configs';

export function getPackageJson(): FeaturePackageJson {
  return {
    scripts: {
      'sort-package-json': 'sort-package-json',
    },
    devDependencies: {
      'sort-package-json': '',
    },
  };
}

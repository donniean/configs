import type { FeaturePackageJson } from '@/types/feature-configs';

export function getPackageJson(): FeaturePackageJson {
  return {
    scripts: {
      commit: 'cz',
    },
    devDependencies: {
      commitizen: '',
      'cz-conventional-changelog': '',
    },
  };
}

import type { FeaturePackageJson } from '@/types/feature-configs';

export function getPackageJson(): FeaturePackageJson {
  return {
    scripts: {
      prepare: 'husky install',
    },
    devDependencies: {
      husky: '',
    },
  };
}

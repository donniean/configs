import type { FeaturePackageJson } from '@/types/feature-configs';

export function getPackageJson(): FeaturePackageJson {
  return {
    scripts: {
      knip: 'knip',
    },
    devDependencies: {
      knip: '',
    },
  };
}

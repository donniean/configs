import type { FeaturePackageJson } from '@/types/feature-configs';

export function getPackageJson(): FeaturePackageJson {
  return {
    scripts: {
      knip: 'knip',
      'knip:fix': 'npm run knip -- --fix',
    },
    devDependencies: {
      knip: '',
    },
  };
}

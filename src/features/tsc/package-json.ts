import type { FeaturePackageJson } from '@/types/feature-configs';

export function getPackageJson(): FeaturePackageJson {
  return {
    scripts: {
      'lint:types': 'tsc --noEmit',
    },
    devDependencies: {
      typescript: '',
    },
  };
}

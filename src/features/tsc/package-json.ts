import type { FeaturePackageJson } from '@/types/feature-configs';

export function getPackageJson(): FeaturePackageJson {
  return {
    scripts: {
      'lint:tsc': 'tsc --noEmit',
    },
    devDependencies: {
      typescript: '',
    },
  };
}

import type { FeaturePackageJson } from '@/types/feature-configs';

export function getPackageJson(): FeaturePackageJson {
  return {
    devDependencies: {
      '@commitlint/cli': '',
      '@commitlint/config-conventional': '',
    },
  };
}

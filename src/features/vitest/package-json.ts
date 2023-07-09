import type { FeaturePackageJson } from '@/types/feature-configs';

export function getPackageJson(): FeaturePackageJson {
  return {
    scripts: {
      test: 'vitest run',
      'test:coverage': 'vitest run --coverage',
      'test:watch': 'vitest watch',
    },
    devDependencies: {
      '@vitest/coverage-c8': '',
      vitest: '',
    },
  };
}

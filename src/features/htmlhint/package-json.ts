import type { FeaturePackageJson } from '@/types/feature-configs';

export function getPackageJson(): FeaturePackageJson {
  return {
    scripts: {
      'lint:htmlhint': 'htmlhint "**/*.html"',
    },
    devDependencies: {
      htmlhint: '',
    },
  };
}

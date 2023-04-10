import type { FeaturePackageJson } from '@/types/feature-configs';

export function getPackageJson(): FeaturePackageJson {
  return {
    scripts: {
      'lint:markdownlint': 'markdownlint --fix "**/*.md"',
    },
    devDependencies: {
      'markdownlint-cli': '',
    },
  };
}

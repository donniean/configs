import type {
  FeaturePackageJson,
  GetPackageJsonOptions,
} from '@/types/feature-configs';
import { getFeatureGlobExtensions } from '@/utils/features';

function getScripts(
  normalizedConfigsConfig: GetPackageJsonOptions['normalizedConfigsConfig']
) {
  const globExtensions = getFeatureGlobExtensions({
    featureKey: 'prettier',
    normalizedConfigsConfig,
  });

  if (!globExtensions) {
    return null;
  }

  return {
    scripts: {
      'lint:prettier': `prettier --check --ignore-unknown "**/*.${globExtensions}"`,
      'lint:prettier:fix': `prettier --write --ignore-unknown "**/*.${globExtensions}"`,
    },
  };
}

export function getPackageJson({
  normalizedConfigsConfig,
}: GetPackageJsonOptions): FeaturePackageJson {
  const scripts = getScripts(normalizedConfigsConfig);

  return {
    ...scripts,
    devDependencies: {
      prettier: '',
    },
  };
}

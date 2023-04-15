import type {
  FeaturePackageJson,
  GetPackageJsonOptions,
} from '@/types/feature-configs';
import { getFeatureGlobExtensions } from '@/utils/features';

function getScripts(
  validConfigsConfig: GetPackageJsonOptions['validConfigsConfig']
) {
  const globExtensions = getFeatureGlobExtensions({
    featureKey: 'prettier',
    validConfigsConfig,
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
  validConfigsConfig,
}: GetPackageJsonOptions): FeaturePackageJson {
  const scripts = getScripts(validConfigsConfig);

  return {
    ...scripts,
    devDependencies: {
      prettier: '',
    },
  };
}

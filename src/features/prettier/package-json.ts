import type {
  FeaturePackageJson,
  GetPackageJsonOptions,
} from '@/types/feature-configs';
import { getFeatureGlobExtensions } from '@/utils/features';

function getScripts(
  validConfigsConfig: GetPackageJsonOptions['validConfigsConfig']
) {
  const globExtensions = getFeatureGlobExtensions({
    validConfigsConfig,
    featureKey: 'prettier',
  });

  if (!globExtensions) {
    return null;
  }

  return {
    scripts: {
      prettier: `prettier --write "**/*.${globExtensions}"`,
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

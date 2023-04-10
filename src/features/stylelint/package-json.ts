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
    featureKey: 'stylelint',
  });

  if (!globExtensions) {
    return null;
  }

  return {
    scripts: {
      'lint:stylelint': `stylelint "**/*.${globExtensions}"`,
      'lint:stylelint:fix': `stylelint --fix "**/*.${globExtensions}"`,
    },
  };
}

function getDevDependencies(
  validConfigsConfig: GetPackageJsonOptions['validConfigsConfig']
) {
  const baseDevDependencies = {
    stylelint: '',
    'stylelint-config-recess-order': '',
    'stylelint-config-standard': '',
  };
  const scssDevDependencies = {
    'stylelint-config-standard-scss': '',
  };
  const cssInJsDevDependencies = {
    'postcss-styled-syntax': '',
  };

  const options = validConfigsConfig.features?.stylelint?.options;
  const hasScss = options?.scss;
  const hasCssInJs = options?.['css-in-js'];

  const devDependencies = {
    ...baseDevDependencies,
    ...(hasScss ? scssDevDependencies : null),
    ...(hasCssInJs ? cssInJsDevDependencies : null),
  };

  return { devDependencies };
}

export function getPackageJson({
  validConfigsConfig,
}: GetPackageJsonOptions): FeaturePackageJson {
  const scripts = getScripts(validConfigsConfig);
  const devDependencies = getDevDependencies(validConfigsConfig);

  return {
    ...scripts,
    ...devDependencies,
  };
}

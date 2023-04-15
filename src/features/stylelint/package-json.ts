import type {
  FeaturePackageJson,
  GetPackageJsonOptions,
} from '@/types/feature-configs';
import { getFeatureGlobExtensions } from '@/utils/features';

import { hasScss, hasStyled } from './utils';

function getScripts(
  validConfigsConfig: GetPackageJsonOptions['validConfigsConfig']
) {
  const globExtensions = getFeatureGlobExtensions({
    featureKey: 'stylelint',
    validConfigsConfig,
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
  const styledDevDependencies = {
    'postcss-styled-syntax': '',
  };

  const extensions = validConfigsConfig.features?.stylelint?.extensions ?? [];

  const devDependencies = {
    ...baseDevDependencies,
    ...(hasScss(extensions) ? scssDevDependencies : null),
    ...(hasStyled(extensions) ? styledDevDependencies : null),
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

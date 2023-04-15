import type {
  FeaturePackageJson,
  GetPackageJsonOptions,
} from '@/types/feature-configs';
import { getFeatureGlobExtensions } from '@/utils/features';

import { hasScss, hasStyled } from './utils';

function getScripts(
  normalizedConfigsConfig: GetPackageJsonOptions['normalizedConfigsConfig']
) {
  const globExtensions = getFeatureGlobExtensions({
    featureKey: 'stylelint',
    normalizedConfigsConfig,
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
  normalizedConfigsConfig: GetPackageJsonOptions['normalizedConfigsConfig']
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

  const extensions =
    normalizedConfigsConfig.features?.stylelint?.extensions ?? [];

  const devDependencies = {
    ...baseDevDependencies,
    ...(hasScss(extensions) ? scssDevDependencies : null),
    ...(hasStyled(extensions) ? styledDevDependencies : null),
  };

  return { devDependencies };
}

export function getPackageJson({
  normalizedConfigsConfig,
}: GetPackageJsonOptions): FeaturePackageJson {
  const scripts = getScripts(normalizedConfigsConfig);
  const devDependencies = getDevDependencies(normalizedConfigsConfig);

  return {
    ...scripts,
    ...devDependencies,
  };
}

import type {
  FeaturePackageJson,
  GetPackageJsonOptions,
} from '@/types/feature-configs';
import { getPatternsString } from '@/utils/misc';

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

  const scssPatterns =
    normalizedConfigsConfig.features?.stylelint?.scssPatterns ?? [];
  const styledPatterns =
    normalizedConfigsConfig.features?.stylelint?.styledPatterns ?? [];

  return {
    ...baseDevDependencies,
    ...(scssPatterns.length > 0 ? scssDevDependencies : null),
    ...(styledPatterns.length > 0 ? styledDevDependencies : null),
  };
}

export function getPackageJson({
  normalizedConfigsConfig,
}: GetPackageJsonOptions): FeaturePackageJson {
  const patterns = normalizedConfigsConfig.features?.stylelint?.patterns ?? [];
  const patternsString = getPatternsString(patterns);

  const devDependencies = getDevDependencies(normalizedConfigsConfig);

  return {
    scripts: {
      'lint:stylelint': `stylelint ${patternsString}`,
      'lint:stylelint:fix': `stylelint --fix ${patternsString}`,
    },
    devDependencies,
  };
}

import type {
  FeaturePackageJson,
  GetPackageJsonOptions,
} from '@/types/feature-configs';
import { getPatternsString } from '@/utils/misc';

function getDevDependencies(
  normalizedConfigsConfig: GetPackageJsonOptions['normalizedConfigsConfig'],
) {
  const baseDevDependencies = {
    stylelint: '',
    'stylelint-config-recess-order': '',
    'stylelint-config-standard': '',
  };
  const cssModulesDevDependencies = {
    'stylelint-config-css-modules': '',
  };
  const scssDevDependencies = {
    'stylelint-config-standard-scss': '',
  };
  const styledDevDependencies = {
    'postcss-styled-syntax': '',
  };

  const hasCssModules = normalizedConfigsConfig.features?.stylelint?.cssModules;
  const scssPatterns =
    normalizedConfigsConfig.features?.stylelint?.scssPatterns ?? [];
  const styledPatterns =
    normalizedConfigsConfig.features?.stylelint?.styledPatterns ?? [];

  return {
    ...baseDevDependencies,
    ...(hasCssModules ? cssModulesDevDependencies : null),
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
      'lint:css': `stylelint ${patternsString}`,
      'lint:css:fix': `npm run lint:stylelint -- --fix`,
    },
    devDependencies,
  };
}

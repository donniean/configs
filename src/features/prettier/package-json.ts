import { omit } from 'lodash-es';

import type {
  FeaturePackageJson,
  GetPackageJsonOptions,
} from '@/types/feature-configs';
import { getPatternsString } from '@/utils/misc';

const FULL_DEV_DEPENDENCIES = {
  prettier: '',
  'prettier-plugin-tailwindcss': '',
};

function getDevDependencies(
  normalizedConfigsConfig: GetPackageJsonOptions['normalizedConfigsConfig'],
) {
  const hasTailwindcss =
    normalizedConfigsConfig.features?.prettier?.tailwindcss;

  return hasTailwindcss
    ? FULL_DEV_DEPENDENCIES
    : omit(FULL_DEV_DEPENDENCIES, 'prettier-plugin-tailwindcss');
}

export function getPackageJson({
  normalizedConfigsConfig,
}: GetPackageJsonOptions): FeaturePackageJson {
  const patterns = normalizedConfigsConfig.features?.prettier?.patterns ?? [];
  const patternsString = getPatternsString(patterns);

  const devDependencies = getDevDependencies(normalizedConfigsConfig);

  return {
    scripts: {
      'lint:prettier': `prettier --check --ignore-unknown ${patternsString}`,
      'lint:prettier:fix': `prettier --write --ignore-unknown ${patternsString}`,
    },
    devDependencies,
  };
}

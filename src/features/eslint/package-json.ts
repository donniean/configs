import type {
  FeaturePackageJson,
  GetPackageJsonOptions,
} from '@/types/feature-configs';
import { getPatternsString } from '@/utils/misc';

export function getPackageJson({
  normalizedConfigsConfig,
}: GetPackageJsonOptions): FeaturePackageJson {
  const patterns = normalizedConfigsConfig.features?.eslint?.patterns ?? [];
  const patternsString = getPatternsString(patterns);

  return {
    scripts: {
      'lint:eslint': `eslint ${patternsString}`,
      'lint:eslint:fix': `eslint --fix ${patternsString}`,
    },
    devDependencies: {},
  };
}

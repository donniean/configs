import type {
  FeaturePackageJson,
  GetPackageJsonOptions,
} from '@/types/feature-configs';
import { getPatternsString } from '@/utils/misc';

export function getPackageJson({
  normalizedConfigsConfig,
}: GetPackageJsonOptions): FeaturePackageJson {
  const patterns = normalizedConfigsConfig.features?.prettier?.patterns ?? [];
  const patternsString = getPatternsString(patterns);

  return {
    scripts: {
      'lint:prettier': `prettier --check --ignore-unknown ${patternsString}`,
      'lint:prettier:fix': `prettier --write --ignore-unknown ${patternsString}`,
    },
    devDependencies: {
      prettier: '',
    },
  };
}

import type {
  FeaturePackageJson,
  GetPackageJsonOptions,
} from '@/types/feature-configs';
import { getPatternsString } from '@/utils/misc';

export function getPackageJson({
  normalizedConfigsConfig,
}: GetPackageJsonOptions): FeaturePackageJson {
  const patterns = normalizedConfigsConfig.features?.htmlhint?.patterns ?? [];
  const patternsString = getPatternsString(patterns);

  return {
    scripts: {
      'lint:htmlhint': `htmlhint --ignore="**/coverage/**" ${patternsString}`,
    },
    devDependencies: {
      htmlhint: '',
    },
  };
}

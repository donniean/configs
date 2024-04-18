import type {
  FeaturePackageJson,
  GetPackageJsonOptions,
} from '@/types/feature-configs';
import { getPatternsString } from '@/utils/misc';

export function getPackageJson({
  normalizedConfigsConfig,
}: GetPackageJsonOptions): FeaturePackageJson {
  const patterns =
    normalizedConfigsConfig.features?.autocorrect?.patterns ?? [];
  const patternsString = getPatternsString(patterns);

  return {
    scripts: {
      'lint:autocorrect': `autocorrect --lint ${patternsString}`,
      'lint:autocorrect:fix': `autocorrect --fix ${patternsString}`,
    },
    devDependencies: {
      'autocorrect-node': '',
    },
  };
}

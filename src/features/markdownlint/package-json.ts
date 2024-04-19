import type {
  FeaturePackageJson,
  GetPackageJsonOptions,
} from '@/types/feature-configs';
import { getPatternsString } from '@/utils/misc';

export function getPackageJson({
  normalizedConfigsConfig,
}: GetPackageJsonOptions): FeaturePackageJson {
  const patterns =
    normalizedConfigsConfig.features?.markdownlint?.patterns ?? [];
  const patternsString = getPatternsString(patterns);

  return {
    scripts: {
      'lint:markdownlint': `markdownlint --dot ${patternsString}`,
      'lint:markdownlint:fix': `npm run lint:markdownlint -- --fix`,
    },
    devDependencies: {
      'markdownlint-cli': '',
    },
  };
}

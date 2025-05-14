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
      'lint:md': `markdownlint --dot ${patternsString}`,
      'lint:md:fix': `npm run lint:md -- --fix`,
    },
    devDependencies: {
      'markdownlint-cli': '',
    },
  };
}

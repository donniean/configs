import type {
  FeaturePackageJson,
  GetPackageJsonOptions,
} from '@/types/feature-configs';
import { getPatternsString } from '@/utils/misc';

export function getPackageJson({
  normalizedConfigsConfig,
}: GetPackageJsonOptions): FeaturePackageJson {
  const patterns =
    normalizedConfigsConfig.features?.['sort-package-json']?.patterns ?? [];
  const patternsString =
    patterns.length === 1 && patterns[0] === 'package.json'
      ? ''
      : getPatternsString(patterns);

  return {
    scripts: {
      'lint:sort-package-json': `npm run lint:sort-package-json:fix -- --check`,
      'lint:sort-package-json:fix':
        `sort-package-json ${patternsString}`.trim(),
    },
    devDependencies: {
      'sort-package-json': '',
    },
  };
}

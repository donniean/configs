import type {
  FeaturePackageJson,
  GetPackageJsonOptions,
} from '@/types/feature-configs';
import { getPatternsString } from '@/utils/misc';

export function getPackageJson({
  normalizedConfigsConfig,
}: GetPackageJsonOptions): FeaturePackageJson {
  const patterns = normalizedConfigsConfig.features?.cspell?.patterns ?? [];
  const patternsString = getPatternsString(patterns);

  return {
    scripts: {
      'lint:spell': `cspell lint --no-progress --relative --no-must-find-files --dot --gitignore ${patternsString}`,
    },
    devDependencies: {
      cspell: '',
    },
  };
}

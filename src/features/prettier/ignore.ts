import { LINT_IGNORE } from '@/constants/ignore';
import type { FeatureIgnore, GetIgnoreOptions } from '@/types/feature-configs';
import { getIgnoreWithCustom } from '@/utils/features';

export function getIgnore({
  normalizedConfigsConfig,
}: GetIgnoreOptions): FeatureIgnore {
  const data = getIgnoreWithCustom({
    featureKey: 'prettier',
    normalizedConfigsConfig,
    ignorePresets: LINT_IGNORE,
  });

  return {
    outputFileName: '.prettierignore',
    data,
  };
}

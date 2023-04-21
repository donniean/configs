import { ESLINT_IGNORE } from '@/constants/ignores';
import type { FeatureIgnore, GetIgnoreOptions } from '@/types/feature-configs';
import { getIgnoreWithCustom } from '@/utils/features';

export function getIgnore({
  normalizedConfigsConfig,
}: GetIgnoreOptions): FeatureIgnore {
  const data = getIgnoreWithCustom({
    featureKey: 'eslint',
    normalizedConfigsConfig,
    ignorePresets: ESLINT_IGNORE,
  });

  return {
    outputFileName: '.eslintignore',
    data,
  };
}

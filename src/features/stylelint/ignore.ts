import { STYLELINT_IGNORE } from '@/constants/ignores';
import type { FeatureIgnore, GetIgnoreOptions } from '@/types/feature-configs';
import { getIgnoreWithCustom } from '@/utils/features';

export function getIgnore({
  normalizedConfigsConfig,
}: GetIgnoreOptions): FeatureIgnore {
  const data = getIgnoreWithCustom({
    featureKey: 'stylelint',
    normalizedConfigsConfig,
    ignorePresets: STYLELINT_IGNORE,
  });

  return {
    outputFileName: '.stylelintignore',
    data,
  };
}

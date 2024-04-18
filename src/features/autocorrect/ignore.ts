import { AUTOCORRECT_IGNORE } from '@/constants/ignores';
import type { FeatureIgnore, GetIgnoreOptions } from '@/types/feature-configs';
import { getIgnoreWithCustom } from '@/utils/features';

export function getIgnore({
  normalizedConfigsConfig,
}: GetIgnoreOptions): FeatureIgnore {
  const data = getIgnoreWithCustom({
    featureKey: 'autocorrect',
    normalizedConfigsConfig,
    ignorePresets: AUTOCORRECT_IGNORE,
  });
  return {
    outputFileName: '.autocorrectignore',
    data,
  };
}

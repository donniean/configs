import { PRETTIER_IGNORE } from '@/constants/ignores';
import type { FeatureIgnore, GetIgnoreOptions } from '@/types/feature-configs';
import { getIgnoreWithCustom } from '@/utils/features';

export function getIgnore({
  normalizedConfigsConfig,
}: GetIgnoreOptions): FeatureIgnore {
  const data = getIgnoreWithCustom({
    featureKey: 'prettier',
    normalizedConfigsConfig,
    ignorePresets: PRETTIER_IGNORE,
  });

  return {
    outputFileName: '.prettierignore',
    data,
  };
}

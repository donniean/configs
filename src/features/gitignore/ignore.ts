import type { FeatureIgnore, GetIgnoreOptions } from '@/types/feature-configs';
import {
  getIgnoreWithCustom,
  readFeatureIgnoreFileSync,
} from '@/utils/features';

export function getIgnore({
  featureKey,
  normalizedConfigsConfig,
}: GetIgnoreOptions): FeatureIgnore {
  const ignorePresets = readFeatureIgnoreFileSync({ featureKey }).split('\n');
  const data = getIgnoreWithCustom({
    featureKey: 'gitignore',
    normalizedConfigsConfig,
    ignorePresets,
  });

  return {
    outputFileName: '.gitignore',
    data,
  };
}

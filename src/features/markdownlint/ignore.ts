import { MARKDOWNLINT_IGNORE } from '@/constants/ignores';
import type { FeatureIgnore, GetIgnoreOptions } from '@/types/feature-configs';
import { getIgnoreWithCustom } from '@/utils/features';

export function getIgnore({
  normalizedConfigsConfig,
}: GetIgnoreOptions): FeatureIgnore {
  const data = getIgnoreWithCustom({
    featureKey: 'markdownlint',
    normalizedConfigsConfig,
    ignorePresets: MARKDOWNLINT_IGNORE,
  });
  return {
    outputFileName: '.markdownlintignore',
    data,
  };
}

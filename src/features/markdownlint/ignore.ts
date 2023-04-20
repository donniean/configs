import { LINT_IGNORE } from '@/constants/ignore';
import type { FeatureIgnore, GetIgnoreOptions } from '@/types/feature-configs';
import { getIgnoreWithCustom } from '@/utils/features';

const IGNORE_PRESETS = [...LINT_IGNORE, 'CHANGELOG.md'];

export function getIgnore({
  normalizedConfigsConfig,
}: GetIgnoreOptions): FeatureIgnore {
  const data = getIgnoreWithCustom({
    featureKey: 'markdownlint',
    normalizedConfigsConfig,
    ignorePresets: IGNORE_PRESETS,
  });
  return {
    // cspell: disable-next-line
    outputFileName: '.markdownlintignore',
    data,
  };
}

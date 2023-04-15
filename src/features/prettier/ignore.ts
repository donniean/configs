import { LINT_IGNORE } from '@/constants/ignore';
import type { FeatureIgnore, GetIgnoreOptions } from '@/types/feature-configs';
import { getIgnoreWithCustom } from '@/utils/features';

export function getIgnore({
  validConfigsConfig,
}: GetIgnoreOptions): FeatureIgnore {
  const data = getIgnoreWithCustom({
    featureKey: 'prettier',
    validConfigsConfig,
    ignore: LINT_IGNORE,
  });

  return {
    outputFileName: '.prettierignore',
    data,
  };
}

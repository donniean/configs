import { LINT_IGNORE } from '@/constants/ignore';
import type { FeatureIgnore } from '@/types/feature-configs';

export function getIgnore(): FeatureIgnore {
  return {
    outputFileName: '.prettierignore',
    data: LINT_IGNORE,
  };
}

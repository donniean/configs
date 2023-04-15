import { LINT_IGNORE } from '@/constants/ignore';
import type { FeatureIgnore } from '@/types/feature-configs';

const IGNORE = ['CHANGELOG.md'];

export function getIgnore(): FeatureIgnore {
  return {
    // cspell: disable-next-line
    outputFileName: '.markdownlintignore',
    data: [...LINT_IGNORE, ...IGNORE],
  };
}

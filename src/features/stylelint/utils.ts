import { without } from 'lodash';

import { STYLELINT_EXTENSIONS } from '@/constants/extensions';
import type { StylelintExtension } from '@/types/extensions';

export function hasScss(extensions: StylelintExtension[]) {
  return extensions.includes('scss');
}

export function hasStyled(extensions: StylelintExtension[]) {
  const targetExtensions = without(STYLELINT_EXTENSIONS, 'css', 'scss');
  return extensions?.some((extension) => targetExtensions.includes(extension));
}

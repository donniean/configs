import { without } from 'lodash';

import { STYLELINT_EXTENSIONS } from '@/constants/extensions';
import type { StylelintExtension } from '@/types/extensions';
import { getGlobExtensions } from '@/utils/misc';

const STYLED_EXTENSIONS = without(STYLELINT_EXTENSIONS, 'css', 'scss');

export function hasScss(extensions: StylelintExtension[]) {
  return extensions.includes('scss');
}

export function hasStyled(extensions: StylelintExtension[]) {
  return extensions?.some((extension) => STYLED_EXTENSIONS.includes(extension));
}

function getStyledExtensions(extensions: StylelintExtension[]) {
  return extensions?.filter((extension) =>
    STYLED_EXTENSIONS.includes(extension)
  );
}

export function getStyledGlobExtensions(extensions: StylelintExtension[]) {
  const styledExtensions = getStyledExtensions(extensions);
  return getGlobExtensions(styledExtensions);
}

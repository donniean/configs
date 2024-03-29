import type { FeatureConfig } from '@/types/feature-configs';

export function getConfig(): FeatureConfig<Record<string, boolean | string>> {
  return {
    outputFileName: '.htmlhintrc',
    format: 'json',
    data: {
      'doctype-first': true,
      'doctype-html5': true,
      'html-lang-require': true,
      'head-script-disabled': true,
      'style-disabled': true,
      'script-disabled': false,
      'title-require': true,
      'attr-lowercase': true,
      'attr-no-duplication': true,
      'attr-no-unnecessary-whitespace': true,
      'attr-unsafe-chars': true,
      'attr-value-double-quotes': true,
      'attr-value-not-empty': false,
      'alt-require': true,
      'input-requires-label': false,
      'tags-check': true,
      'tag-pair': true,
      'tag-self-close': false,
      'tagname-lowercase': true,
      'empty-tag-not-self-closed': false,
      'src-not-empty': true,
      'href-abs-or-rel': false,
      'id-class-ad-disabled': true,
      'id-class-value': 'dash',
      'id-unique': true,
      'inline-script-disabled': true,
      'inline-style-disabled': true,
      'space-tab-mixed-disabled': 'space',
      'spec-char-escape': true,
    },
  };
}

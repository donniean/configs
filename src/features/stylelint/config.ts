import { LINT_IGNORE } from '@/constants/ignore';
import type { JsonObject } from '@/types/base';
import type { FeatureConfig } from '@/types/feature-configs';

const FULL_CONFIG = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    'color-named': ['never', { ignore: ['inside-function'] }],
    'no-unknown-animations': true,
  },
  ignoreFiles: LINT_IGNORE,
  overrides: [
    {
      files: ['**/*.scss'],
      extends: ['stylelint-config-standard-scss'],
    },
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      customSyntax: 'postcss-styled-syntax',
      rules: {
        'no-empty-source': null,
        'value-keyword-case': null,
        'function-no-unknown': null,
      },
    },
  ],
};

export function getConfig(): FeatureConfig<JsonObject> {
  return {
    outputFileName: 'stylelint.config.cjs',
    format: 'cjs',
    data: FULL_CONFIG,
  };
}

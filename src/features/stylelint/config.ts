import { omit } from 'lodash';

import { LINT_IGNORE } from '@/constants/ignore';
import type { JsonObject } from '@/types/base';
import type { FeatureConfig, GetConfigOptions } from '@/types/feature-configs';

import { getStyledGlobExtensions, hasScss } from './utils';

function getFullConfig({
  styledGlobExtensions,
}: {
  styledGlobExtensions: string;
}) {
  return {
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
        files: [`**/*.${styledGlobExtensions}`],
        customSyntax: 'postcss-styled-syntax',
        rules: {
          'no-empty-source': null,
          'value-keyword-case': null,
          'function-no-unknown': null,
        },
      },
    ],
  };
}

function getData(validConfigsConfig: GetConfigOptions['validConfigsConfig']) {
  const extensions = validConfigsConfig.features?.stylelint?.extensions ?? [];
  const hasScssResult = hasScss(extensions);
  const styledGlobExtensions = getStyledGlobExtensions(extensions);
  const fullConfig = getFullConfig({ styledGlobExtensions });

  let data = { ...fullConfig };
  if (!hasScssResult) {
    data = omit(data, 'overrides[0]');
  }
  if (!styledGlobExtensions) {
    data = omit(data, 'overrides[1]');
  }
  const { overrides, ...rest } = data;
  const filteredOverrides = overrides.filter(Boolean);

  if (filteredOverrides.length === 0) {
    return rest;
  }

  return { ...rest, overrides: filteredOverrides };
}

export function getConfig({
  validConfigsConfig,
}: GetConfigOptions): FeatureConfig<JsonObject> {
  const data = getData(validConfigsConfig);

  return {
    outputFileName: 'stylelint.config.cjs',
    format: 'cjs',
    data,
  };
}

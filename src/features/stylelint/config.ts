import { omit } from 'lodash';

import type { JsonObject } from '@/types/base';
import type { FeatureConfig, GetConfigOptions } from '@/types/feature-configs';

function getFullConfig({
  scssPatterns,
  styledPatterns,
}: {
  scssPatterns: string[];
  styledPatterns: string[];
}) {
  return {
    extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
    rules: {
      'color-named': ['never', { ignore: ['inside-function'] }],
      'no-unknown-animations': true,
    },
    overrides: [
      {
        files: scssPatterns,
        extends: ['stylelint-config-standard-scss'],
      },
      {
        files: styledPatterns,
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

function getData(
  normalizedConfigsConfig: GetConfigOptions['normalizedConfigsConfig']
) {
  const stylelint = normalizedConfigsConfig.features?.stylelint;
  const scssPatterns = stylelint?.scssPatterns ?? [];
  const styledPatterns = stylelint?.styledPatterns ?? [];

  const fullConfig = getFullConfig({ scssPatterns, styledPatterns });

  let data = { ...fullConfig };
  if (scssPatterns.length === 0) {
    data = omit(data, 'overrides[0]');
  }
  if (styledPatterns.length === 0) {
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
  normalizedConfigsConfig,
}: GetConfigOptions): FeatureConfig<JsonObject> {
  const data = getData(normalizedConfigsConfig);

  return {
    outputFileName: 'stylelint.config.cjs',
    format: 'cjs',
    data,
  };
}

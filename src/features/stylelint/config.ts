import { omit } from 'lodash-es';
import type { Config } from 'stylelint';

import type { JsonObject } from '@/types/base';
import type { FeatureConfig, GetConfigOptions } from '@/types/feature-configs';

function getFullConfig({
  hasCssModules,
  scssPatterns,
  styledPatterns,
}: {
  hasCssModules: boolean | undefined;
  scssPatterns: string[];
  styledPatterns: string[];
}): Config {
  return {
    extends: [
      'stylelint-config-standard',
      hasCssModules ? 'stylelint-config-css-modules' : '',
      'stylelint-config-recess-order',
    ],
    rules: {
      'at-rule-no-unknown': [
        true,
        {
          ignoreAtRules: ['tailwind', 'layer', 'apply', 'config'],
        },
      ],
      'color-named': [
        'never',
        {
          ignore: ['inside-function'],
        },
      ],
      'function-no-unknown': [
        true,
        {
          ignoreFunctions: ['theme', 'screen'],
        },
      ],
      'no-unknown-animations': true,
    },
    overrides: [
      {
        files: scssPatterns,
        extends: [
          'stylelint-config-standard-scss',
          hasCssModules ? 'stylelint-config-css-modules' : '',
        ],
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
  normalizedConfigsConfig: GetConfigOptions['normalizedConfigsConfig'],
) {
  const stylelint = normalizedConfigsConfig.features?.stylelint;
  const hasCssModules = stylelint?.cssModules;
  const scssPatterns = stylelint?.scssPatterns ?? [];
  const styledPatterns = stylelint?.styledPatterns ?? [];

  const fullConfig = getFullConfig({
    hasCssModules,
    scssPatterns,
    styledPatterns,
  });

  let data = { ...fullConfig };
  if (scssPatterns.length === 0) {
    data = omit(data, 'overrides[0]');
  }
  if (styledPatterns.length === 0) {
    data = omit(data, 'overrides[1]');
  }
  const { overrides, ...rest } = data;
  const filteredOverrides = overrides?.filter(Boolean);

  if (filteredOverrides?.length === 0) {
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
    data: data as JsonObject,
  };
}

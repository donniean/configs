import deepMerge from 'deepmerge';

import type { ESLintConfig } from '@/features/eslint/types';
import type { JsonObject } from '@/types/base';
import type { FeatureConfig, GetConfigOptions } from '@/types/feature-configs';

import * as base from './rules/base';
import * as prettier from './rules/prettier';
import * as react from './rules/react';
import * as typescript from './rules/typescript';
import { hasPrettierFn, hasReactFn, hasTypeScriptFn } from './utils';

function getData(
  normalizedConfigsConfig: GetConfigOptions['normalizedConfigsConfig']
): ESLintConfig {
  const hasTypeScript = hasTypeScriptFn(normalizedConfigsConfig);
  const hasReact = hasReactFn(normalizedConfigsConfig);
  const hasPrettier = hasPrettierFn(normalizedConfigsConfig);

  const baseConfig = base.getConfig({ hasReact });
  const typescriptConfig = typescript.getConfig({ hasReact });
  const reactConfig = react.getConfig();
  const prettierConfig = prettier.getConfig();

  const finalPrettierConfig = hasPrettier ? prettierConfig : {};
  const finalTypesScriptConfig = hasTypeScript
    ? {
        overrides: [
          {
            files: ['**/*.{ts,tsx}'],
            ...deepMerge(typescriptConfig, finalPrettierConfig),
          },
        ],
      }
    : {};
  const finalReactConfig = hasReact
    ? {
        overrides: [
          {
            files: ['**/*.{ts,tsx}'],
            ...deepMerge(reactConfig, finalPrettierConfig),
          },
        ],
      }
    : {};

  return deepMerge.all([
    baseConfig,
    finalTypesScriptConfig,
    finalReactConfig,
    finalPrettierConfig,
  ]);
}

export function getConfig({
  normalizedConfigsConfig,
}: GetConfigOptions): FeatureConfig<JsonObject> {
  const data = getData(normalizedConfigsConfig);

  return {
    outputFileName: '.eslintrc.cjs',
    format: 'cjs',
    data: data as JsonObject,
    leadingComments: '/** @type {import("eslint").Linter.Config} */',
  };
}

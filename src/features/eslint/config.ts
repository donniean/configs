import deepMerge from 'deepmerge';

import type { ESLintConfig } from '@/features/eslint/types';
import type { JsonObject } from '@/types/base';
import type { FeatureConfig, GetConfigOptions } from '@/types/feature-configs';

import * as base from './rules/base';
import * as node from './rules/node';
import * as prettier from './rules/prettier';
import * as react from './rules/react';
import * as typescript from './rules/typescript';
import {
  hasNodeFn,
  hasPrettierFn,
  hasReactFn,
  hasTypeScriptFn,
  sortESLintConfig,
} from './utils';

function getData(
  normalizedConfigsConfig: GetConfigOptions['normalizedConfigsConfig']
): ESLintConfig {
  const hasPrettier = hasPrettierFn(normalizedConfigsConfig);
  const hasTypeScript = hasTypeScriptFn(normalizedConfigsConfig);
  const hasReact = hasReactFn(normalizedConfigsConfig);
  const hasNode = hasNodeFn(normalizedConfigsConfig);

  const baseConfig = base.getConfig({ hasReact });
  const prettierConfig = prettier.getConfig();
  const typescriptConfig = typescript.getConfig({ hasReact });
  const reactConfig = react.getConfig();
  const nodeConfig = node.getConfig();

  const nodePatterns =
    normalizedConfigsConfig.features?.eslint?.nodePatterns ?? [];

  const finalPrettierConfig = hasPrettier ? prettierConfig : {};
  const finalTypesScriptConfig = hasTypeScript
    ? {
        overrides: [
          {
            files: [`**/*.${hasReact ? '{ts,tsx}' : 'ts'}`],
            ...deepMerge(typescriptConfig, finalPrettierConfig),
          },
        ],
      }
    : {};
  const finalReactConfig = hasReact
    ? {
        overrides: [
          {
            files: [`./src/**/*.${hasTypeScript ? '{ts,tsx}' : '{js,jsx}'}`],
            ...deepMerge(reactConfig, finalPrettierConfig),
          },
        ],
      }
    : {};
  const finalNodeConfig = hasNode
    ? {
        overrides: [
          {
            files: nodePatterns,
            ...deepMerge(nodeConfig, finalPrettierConfig),
          },
        ],
      }
    : {};

  const finalConfig = deepMerge.all([
    baseConfig,
    finalPrettierConfig,
    finalTypesScriptConfig,
    finalReactConfig,
    finalNodeConfig,
  ]);

  return sortESLintConfig(finalConfig);
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

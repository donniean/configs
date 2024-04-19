import deepMerge from 'deepmerge';

import type { ESLintConfig } from '@/features/eslint/types';
import type { JsonObject } from '@/types/base';
import type { FeatureConfig, GetConfigOptions } from '@/types/feature-configs';

import * as base from './rules/base';
import * as next from './rules/next';
import * as node from './rules/node';
import * as prettier from './rules/prettier';
import * as react from './rules/react';
import * as typescript from './rules/typescript';
import * as vitest from './rules/vitest';
import {
  hasNextFn,
  hasNodeFn,
  hasPrettierFn,
  hasReactFn,
  hasTypeScriptFn,
  hasVitestFn,
  sortESLintConfig,
} from './utils';

// eslint-disable-next-line sonarjs/cognitive-complexity
function getData(
  normalizedConfigsConfig: GetConfigOptions['normalizedConfigsConfig'],
): ESLintConfig {
  const hasPrettier = hasPrettierFn(normalizedConfigsConfig);
  const hasTypeScript = hasTypeScriptFn(normalizedConfigsConfig);
  const hasReact = hasReactFn(normalizedConfigsConfig);
  const hasNext = hasNextFn(normalizedConfigsConfig);
  const hasNode = hasNodeFn(normalizedConfigsConfig);
  const hasVitest = hasVitestFn(normalizedConfigsConfig);

  const baseConfig = base.getConfig({ hasTypeScript, hasReact });
  const prettierConfig = prettier.getConfig();
  const typescriptConfig = typescript.getConfig({ hasReact });
  const reactConfig = react.getConfig();
  const nextConfig = next.getConfig();
  const nodeConfig = node.getConfig();
  const vitestConfig = vitest.getConfig();

  const nodePatterns =
    normalizedConfigsConfig.features?.eslint?.nodePatterns ?? [];
  const vitestPatterns =
    normalizedConfigsConfig.features?.eslint?.vitestPatterns ?? [];

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
  const finalNextConfig =
    hasReact && hasNext
      ? {
          overrides: [
            {
              files: [`./src/**/*.${hasTypeScript ? '{ts,tsx}' : '{js,jsx}'}`],
              ...deepMerge.all([reactConfig, nextConfig, finalPrettierConfig]),
            },
          ],
        }
      : {};
  const finalNodeConfig = (() => {
    if (!hasNode) {
      return {};
    }

    const config = nodeConfig;

    if (nodePatterns.includes('**')) {
      return config;
    }

    return {
      overrides: [{ files: nodePatterns, config }],
    };
  })();
  const finalVitestConfig = (() => {
    if (!hasVitest) {
      return {};
    }

    const config = vitestConfig;

    if (vitestPatterns.includes('**')) {
      return config;
    }

    return {
      overrides: [{ files: vitestPatterns, ...config }],
    };
  })();

  const finalConfig = deepMerge.all([
    baseConfig,
    finalPrettierConfig,
    finalTypesScriptConfig,
    hasNext ? finalNextConfig : finalReactConfig,
    finalNodeConfig,
    finalVitestConfig,
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
    banner: '/** @type {import("eslint").Linter.Config} */',
  };
}

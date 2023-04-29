import type { JsonArray } from '@/types/base';
import type { FeatureConfig } from '@/types/feature-configs';

export function getConfig(): FeatureConfig<JsonArray> {
  return {
    outputFileName: 'eslint.config.js',
    format: 'esm',
    data: [],
    leadingComments: '/** @type {import("eslint").Linter.Config} */',
  };
}

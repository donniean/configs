import type { JsonObject } from '@/types/base';
import type { FeatureConfig } from '@/types/feature-configs';

export function getConfig(): FeatureConfig<JsonObject> {
  return {
    outputFileName: '.eslintrc.cjs',
    format: 'cjs',
    data: {},
    leadingComments: '/** @type {import("eslint").Linter.Config} */',
  };
}

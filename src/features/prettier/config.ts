import type { JsonObject } from '@/types/base';
import type { FeatureConfig } from '@/types/feature-configs';

export function getConfig(): FeatureConfig<JsonObject> {
  return {
    outputFileName: 'prettier.config.cjs',
    format: 'cjs',
    data: {
      printWidth: 80,
      singleQuote: true,
      arrowParens: 'avoid',
    },
  };
}

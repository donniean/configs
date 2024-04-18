import type { JsonObject } from '@/types/base';
import type { FeatureConfig } from '@/types/feature-configs';

export function getConfig(): FeatureConfig<JsonObject> {
  return {
    outputFileName: '.autocorrectrc',
    format: 'json',
    data: {
      fileTypes: {
        mjs: 'javascript',
        cjs: 'javascript',
      },
    },
  };
}

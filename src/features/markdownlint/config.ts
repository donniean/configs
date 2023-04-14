import type { JsonObject } from '@/types/base';
import type { FeatureConfig } from '@/types/feature-configs';

export function getConfig(): FeatureConfig<JsonObject> {
  return {
    outputFileName: '.markdownlint.json',
    format: 'json',
    data: {
      default: true,
      MD013: false,
      MD024: {
        siblings_only: true,
      },
    },
  };
}

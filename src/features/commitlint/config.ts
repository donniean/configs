import type { FeatureConfig } from '@/types/feature-configs';

export function getConfig(): FeatureConfig<{ extends: string[] }> {
  return {
    outputFileName: 'commitlint.config.mjs',
    format: 'esm',
    data: {
      extends: ['@commitlint/config-conventional'],
    },
  };
}

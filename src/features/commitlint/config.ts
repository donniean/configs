import type { FeatureConfig } from '@/types/feature-configs';

export function getConfig(): FeatureConfig<{ extends: string[] }> {
  return {
    outputFileName: 'commitlint.config.cjs',
    format: 'cjs',
    data: {
      extends: ['@commitlint/config-conventional'],
    },
  };
}

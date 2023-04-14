import type { FeatureConfig } from '@/types/feature-configs';

export function getConfig(): FeatureConfig<{ path: string }> {
  return {
    outputFileName: '.cz.json',
    format: 'json',
    data: {
      path: 'cz-conventional-changelog',
    },
  };
}

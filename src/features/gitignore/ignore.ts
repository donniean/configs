import type { FeatureIgnore, GetIgnoreOptions } from '@/types/feature-configs';
import { readFeatureIgnoreFileSync } from '@/utils/features';

export function getIgnore({ featureKey }: GetIgnoreOptions): FeatureIgnore {
  return {
    outputFileName: '.gitignore',
    data: readFeatureIgnoreFileSync({ featureKey }).split('\n'),
  };
}

import type { JsonObjectOrArray } from '@/types/base';
import type { HandleFeatureOptions } from '@/types/handlers';
import { outputFormatFileSync } from '@/utils/files';
import * as paths from '@/utils/paths';

type HandleConfigOptions = Pick<
  Required<HandleFeatureOptions>,
  'featureKey' | 'normalizedConfigsConfig' | 'getConfig'
>;

export function handleConfig({
  featureKey,
  normalizedConfigsConfig,
  getConfig,
}: HandleConfigOptions) {
  const { outputFileName, format, data } = getConfig({
    featureKey,
    normalizedConfigsConfig,
  });
  const filePath = paths.resolveCwd(outputFileName);
  if (format === 'json' || format === 'cjs' || format === 'esm') {
    const shadow = data as JsonObjectOrArray;
    outputFormatFileSync({ filePath, data: shadow, format });
  } else if (format === 'text') {
    outputFormatFileSync({ filePath, data, format });
  }
}

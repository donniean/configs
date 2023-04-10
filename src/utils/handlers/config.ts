import type { JsonObjectOrArray } from '@/types/base';
import type { HandleFeatureOptions } from '@/types/handlers';
import { outputFormatFileSync } from '@/utils/files';
import * as paths from '@/utils/paths';

type HandleConfigOptions = Pick<
  Required<HandleFeatureOptions>,
  'featureKey' | 'validConfigsConfig' | 'getConfig'
>;

export function handleConfig({
  featureKey,
  validConfigsConfig,
  getConfig,
}: HandleConfigOptions) {
  const { outputFileName, format, data } = getConfig({
    featureKey,
    validConfigsConfig,
  });
  const filePath = paths.resolveCwd(outputFileName);
  if (format === 'json' || format === 'cjs' || format === 'esm') {
    const shadow = data as JsonObjectOrArray;
    outputFormatFileSync({ filePath, data: shadow, format });
  } else if (format === 'text') {
    outputFormatFileSync({ filePath, data, format });
  }
}

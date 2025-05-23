import cleanDeep from 'clean-deep';

import type { JsonObjectOrArray } from '@/types/base';
import type { HandleFeatureOptions } from '@/types/handlers';
import { outputFormatFile } from '@/utils/files';
import * as paths from '@/utils/paths';

type HandleConfigOptions = Pick<
  Required<HandleFeatureOptions>,
  'featureKey' | 'normalizedConfigsConfig' | 'getConfig'
>;

export async function handleConfig({
  featureKey,
  normalizedConfigsConfig,
  getConfig,
}: HandleConfigOptions) {
  const {
    outputFileName,
    format,
    data,
    banner = '',
  } = getConfig({
    featureKey,
    normalizedConfigsConfig,
  });
  const filePath = paths.resolveCwd(outputFileName);
  if (format === 'json' || format === 'cjs' || format === 'esm') {
    const shadow = cleanDeep(data) as JsonObjectOrArray;
    await (format === 'json'
      ? outputFormatFile({
          filePath,
          data: shadow,
          format,
        })
      : outputFormatFile({
          filePath,
          data: shadow,
          format,
          banner,
        }));
  } else {
    await outputFormatFile({
      filePath,
      data: typeof data === 'string' ? data : JSON.stringify(data, null, 2),
      format,
    });
  }
}

import type { JsonObjectOrArray } from '@/types/base';
import type { HandleFeatureOptions } from '@/types/handlers';
import { outputFormatFileSync } from '@/utils/files';
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
    leadingComments = '',
  } = getConfig({
    featureKey,
    normalizedConfigsConfig,
  });
  const filePath = paths.resolveCwd(outputFileName);
  if (format === 'json' || format === 'cjs' || format === 'esm') {
    const shadow = data as JsonObjectOrArray;
    await (format === 'json'
      ? outputFormatFileSync({
          filePath,
          data: shadow,
          format,
        })
      : outputFormatFileSync({
          filePath,
          data: shadow,
          format,
          leadingComments,
        }));
  } else if (format === 'text') {
    await outputFormatFileSync({ filePath, data, format });
  }
}

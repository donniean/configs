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
  const { outputFileName, format, data, ...rest } = getConfig({
    featureKey,
    normalizedConfigsConfig,
  });
  const filePath = paths.resolveCwd(outputFileName);
  if (format === 'json' || format === 'cjs' || format === 'esm') {
    const shadow = data as JsonObjectOrArray;
    if (format === 'json') {
      outputFormatFileSync({
        filePath,
        data: shadow,
        format,
      });
    } else {
      const obj: { leadingComments?: string } = rest;
      const leadingComments = obj.leadingComments ?? '';
      outputFormatFileSync({
        filePath,
        data: shadow,
        format,
        leadingComments,
      });
    }
  } else if (format === 'text') {
    outputFormatFileSync({ filePath, data, format });
  }
}

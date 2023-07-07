import type { HandleFeatureOptions } from '@/types/handlers';
import { outputFile } from '@/utils/files';
import * as paths from '@/utils/paths';

type HandleIgnoreOptions = Pick<
  Required<HandleFeatureOptions>,
  'featureKey' | 'normalizedConfigsConfig' | 'getIgnore'
>;

export async function handleIgnore({
  featureKey,
  normalizedConfigsConfig,
  getIgnore,
}: HandleIgnoreOptions) {
  const { outputFileName, data } = getIgnore({
    featureKey,
    normalizedConfigsConfig,
  });
  const filePath = paths.resolveCwd(outputFileName);
  const str = data.join('\n');
  await outputFile({ filePath, data: str });
}

import type { HandleFeatureOptions } from '@/types/handlers';
import { outputFileSync } from '@/utils/files';
import * as paths from '@/utils/paths';

type HandleIgnoreOptions = Pick<
  Required<HandleFeatureOptions>,
  'featureKey' | 'validConfigsConfig' | 'getIgnore'
>;

export function handleIgnore({
  featureKey,
  validConfigsConfig,
  getIgnore,
}: HandleIgnoreOptions) {
  const { outputFileName, data } = getIgnore({
    featureKey,
    validConfigsConfig,
  });
  const filePath = paths.resolveCwd(outputFileName);
  const str = data.join('\n');
  outputFileSync({ filePath, data: str });
}

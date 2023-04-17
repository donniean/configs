import type { HandleExtrasOptions } from '@/types/handlers';
import * as files from '@/utils/files';
import * as paths from '@/utils/paths';

export function handleExtras({ featureKey }: HandleExtrasOptions) {
  const directoryName = 'dictionaries';
  const src = paths.resolveAssets(featureKey, directoryName);
  const dest = paths.resolveCwd(directoryName);
  files.copySync({ src, dest });
}

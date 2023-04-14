import type { FeatureConfig } from '@/types/feature-configs';
import * as files from '@/utils/files';
import * as paths from '@/utils/paths';

const data = files.readFileSync({
  filePath: paths.resolveFeatureAssets('gitattributes', 'gitattributes'),
});

export function getConfig(): FeatureConfig<string> {
  return {
    outputFileName: '.gitattributes',
    format: 'text',
    data,
  };
}

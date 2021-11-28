import { copyFilesToDestByTemplatesSync } from '@/utils/fs';
import * as packageJson from '@/utils/package-json';

export default async () => {
  const packageNames = ['htmlhint'];
  const fileNames = ['.htmlhintrc'];
  await packageJson.mergeDevDependencies({ packageNames });
  copyFilesToDestByTemplatesSync({ modulePath: __dirname, fileNames });
};

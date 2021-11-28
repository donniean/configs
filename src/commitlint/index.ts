import { copyFilesToDestByTemplatesSync } from '@/utils/fs';
import * as packageJson from '@/utils/package-json';

export default async () => {
  const packageNames = ['@commitlint/cli', '@commitlint/config-conventional'];
  const fileNames = ['.commitlintrc.js'];

  await packageJson.mergeDevDependencies({ packageNames });
  copyFilesToDestByTemplatesSync({ modulePath: __dirname, fileNames });
};

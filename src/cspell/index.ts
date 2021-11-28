import {copyFilesToDestByTemplatesSync} from '@/utils/fs';
import * as packageJson from '@/utils/package-json';

export default async () => {
  const packageNames = ['cspell'];
  const fileNames = ['cspell.config.js'];

  await packageJson.mergeDevDependencies({packageNames});
  copyFilesToDestByTemplatesSync({modulePath: __dirname, fileNames});
  await packageJson.merge({
    data: {
      scripts: {
        cspell: 'cspell "**"',
      },
    },
  });
};

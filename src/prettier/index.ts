import fileExtensions from '@/utils/file-extensions';
import {copyFilesToDestByTemplatesSync} from '@/utils/fs';
import * as packageJson from '@/utils/package-json';

export default async ({parsedConfig}) => {
  const packageNames = ['prettier'];
  const fileNames = ['.prettierrc.js', '.prettierignore'];
  const extensions = fileExtensions.getPrettier({
    parsedConfig,
    withGlobBraces: true,
  });

  await packageJson.mergeDevDependencies({packageNames});
  copyFilesToDestByTemplatesSync({modulePath: __dirname, fileNames});
  await packageJson.merge({
    data: {
      scripts: {
        prettier: `npx prettier --write "**/*.${extensions}"`,
      },
    },
  });
};

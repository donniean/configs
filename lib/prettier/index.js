const packageJson = require('../utils/package-json');
const { copyFilesToDestByTemplatesSync } = require('../utils/fs');
const fileExtensions = require('../utils/file-extensions');

module.exports = async ({ parsedConfig }) => {
  const packageNames = ['prettier'];
  const fileNames = ['.prettierrc.js', '.prettierignore'];
  const extensions = fileExtensions.getPrettier({
    parsedConfig,
    withGlobBraces: true,
  });

  await packageJson.mergeDevDependencies({ packageNames });
  copyFilesToDestByTemplatesSync({ modulePath: __dirname, fileNames });
  await packageJson.merge({
    data: {
      scripts: {
        prettier: `npx prettier "**/*.${extensions}"`,
      },
    },
  });
};

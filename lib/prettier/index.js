const packageJson = require('../utils/package-json');
const { copyFilesToDestByTemplatesSync } = require('../utils/fs');

module.exports = async () => {
  const packageNames = ['prettier'];
  const fileNames = ['.prettierrc.js', '.prettierignore'];
  await packageJson.mergeDevDependencies({ packageNames });
  copyFilesToDestByTemplatesSync({ modulePath: __dirname, fileNames });
  await packageJson.merge({
    data: {
      scripts: {
        prettier:
          'npx prettier "**/*.{js,ts,jsx,tsx,json,html,vue,css,less,scss,md,yaml}"',
      },
    },
  });
};

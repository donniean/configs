const packageJson = require('../utils/package-json');
const { copyFilesToDestByTemplates } = require('../utils/fs');

module.exports = async () => {
  const packageNames = ['prettier'];
  const fileNames = ['.prettierrc.js', '.prettierignore'];
  await packageJson.mergeDevDependencies({ packageNames });
  copyFilesToDestByTemplates({ modulePath: __dirname, fileNames });
  packageJson.merge({
    data: {
      scripts: {
        prettier:
          'npx prettier "**/*.{js,ts,jsx,tsx,json,html,vue,css,less,scss,md,yaml}"',
      },
    },
  });
};

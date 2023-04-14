const { copyFilesToDestByTemplatesSync } = require('../utils/fs');
const packageJson = require('../utils/package-json');

module.exports = async () => {
  const packageNames = ['@commitlint/cli', '@commitlint/config-conventional'];
  const fileNames = ['.commitlintrc.js'];

  await packageJson.mergeDevDependencies({ packageNames });
  copyFilesToDestByTemplatesSync({ modulePath: __dirname, fileNames });
};

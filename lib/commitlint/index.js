const { copyFilesToDestByTemplates } = require('../utils/fs');
const packageJson = require('../utils/package-json');

module.exports = () => {
  const packageNames = ['@commitlint/cli', '@commitlint/config-conventional'];
  const fileNames = ['.commitlintrc.js'];

  packageJson.mergeDevDependencies({ packageNames });
  copyFilesToDestByTemplates({ modulePath: __dirname, fileNames });
};

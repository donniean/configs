const packageJson = require('../utils/package-json');
const { copyFilesToDestByTemplates } = require('../utils/fs');

module.exports = () => {
  const packageNames = ['htmlhint'];
  const fileNames = ['.htmlhintrc'];
  packageJson.mergeDevDependencies({ packageNames });
  copyFilesToDestByTemplates({ modulePath: __dirname, fileNames });
};

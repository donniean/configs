const packageJson = require('../utils/package-json');
const { copyFilesToDestByTemplatesSync } = require('../utils/fs');

module.exports = async () => {
  const packageNames = ['htmlhint'];
  const fileNames = ['.htmlhintrc'];
  await packageJson.mergeDevDependencies({ packageNames });
  copyFilesToDestByTemplatesSync({ modulePath: __dirname, fileNames });
};

const { copyFilesToDestByTemplates } = require('../utils/fs');
const packageJson = require('../utils/package-json');

module.exports = () => {
  const packageNames = ['cspell'];
  const fileNames = ['.cspell.json'];

  packageJson.mergeDevDependencies({ packageNames });
  copyFilesToDestByTemplates({ modulePath: __dirname, fileNames });
  packageJson.merge({
    data: {
      scripts: {
        cspell: 'cspell "**/*"',
      },
    },
  });
};

const { copyFilesToDestByTemplatesSync } = require('../utils/fs');
const packageJson = require('../utils/package-json');

module.exports = async () => {
  const packageNames = ['cspell'];
  const fileNames = ['cspell.config.js'];

  await packageJson.mergeDevDependencies({ packageNames });
  copyFilesToDestByTemplatesSync({ modulePath: __dirname, fileNames });
  await packageJson.merge({
    data: {
      scripts: {
        cspell: 'cspell "**"',
      },
    },
  });
};

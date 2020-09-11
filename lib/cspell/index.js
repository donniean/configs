const Generator = require('yeoman-generator');

const { copyFilesFromTemplate } = require('../utils/fs');
const {
  extendDevDependencies,
  extendPackageJSON,
} = require('../utils/package-json');

module.exports = class extends Generator {
  async writing() {
    const packageNames = ['cspell'];
    const fileNames = ['.cspell.json'];

    await extendDevDependencies({ context: this, packageNames });
    copyFilesFromTemplate({ context: this, fileNames });
    extendPackageJSON({
      context: this,
      json: {
        scripts: {
          cspell: 'cspell "**/*"',
        },
      },
    });
  }
};

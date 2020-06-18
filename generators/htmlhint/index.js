const Generator = require('yeoman-generator');

const { copyFilesFromTemplate } = require('../../utils/fs');
const { extendDevDependencies } = require('../../utils/package-json');

module.exports = class extends Generator {
  /* constructor(args, opts) {
    super(args, opts);
  } */

  async writing() {
    const packageNames = ['htmlhint'];
    const fileNames = ['.htmlhintrc'];
    await extendDevDependencies({ context: this, packageNames });
    copyFilesFromTemplate({ context: this, fileNames });
  }
};

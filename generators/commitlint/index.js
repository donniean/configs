const Generator = require('yeoman-generator');

const { copyFilesFromTemplate } = require('../../utils/fs');
const { extendDevDependencies } = require('../../utils/package-json');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async writing() {
    const packageNames = ['@commitlint/cli', '@commitlint/config-conventional'];
    const fileNames = ['commitlint.config.js'];

    await extendDevDependencies({ context: this, packageNames });

    copyFilesFromTemplate({ context: this, fileNames });
  }
};

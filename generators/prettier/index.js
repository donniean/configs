'use strict';

const Generator = require('yeoman-generator');

const { extendDevDependencies } = require('../../utils/package-json');
const { copyFilesFromTemplate } = require('../../utils/fs');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async writing() {
    const packageNames = ['prettier'];
    const fileNames = ['prettier.config.js', '.prettierignore'];
    await extendDevDependencies({ context: this, packageNames });
    copyFilesFromTemplate({ context: this, fileNames });
  }
};

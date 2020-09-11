const Generator = require('yeoman-generator');

const { copyFilesFromTemplate } = require('../utils/fs');

module.exports = class extends Generator {
  /* constructor(args, opts) {
    super(args, opts);
  } */

  writing() {
    const fileNames = ['.editorconfig'];
    copyFilesFromTemplate({ context: this, fileNames });
  }
};

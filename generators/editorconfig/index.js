'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  writing() {
    const fileName = '.editorconfig';
    this.fs.copy(this.templatePath(fileName), this.destinationPath(fileName));
  }
};

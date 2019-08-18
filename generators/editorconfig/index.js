'use strict';

const Generator = require('yeoman-generator');

const { copyConfigTemplateFile } = require('../../utils/fs');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  writing() {
    copyConfigTemplateFile('editorconfig', '.editorconfig');
  }
};

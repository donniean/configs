'use strict';
const Generator = require('yeoman-generator');

const { base, eslint } = require('./questions');

module.exports = class extends Generator {
  async prompting() {
    const prompts = [base, eslint];
    const answers = await this.prompt(prompts);
    this.log(answers);
  }

  writing() {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  }

  install() {
    // this.installDependencies();
  }
};

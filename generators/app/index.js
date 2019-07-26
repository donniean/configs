'use strict';
const Generator = require('yeoman-generator');

const { base, eslint } = require('./questions');

module.exports = class extends Generator {
  async prompting() {
    const baseQuestions = base;
    const eslintQuestions = [eslint];
    const { configs } = await this.prompt(baseQuestions);
    const hasESLint = configs.includes('eslint');
    if (hasESLint) {
      const { eslint: preset } = await this.prompt(eslintQuestions);
      console.log(preset);
    }
    console.log(configs, hasESLint);
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

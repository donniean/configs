'use strict';
const Generator = require('yeoman-generator');

const { base, eslint } = require('./questions');

module.exports = class extends Generator {
  prompting() {
    const prompts = [base, eslint];

    return this.prompt(prompts).then(props => {
      this.log(props);
      this.props = props;
    });
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

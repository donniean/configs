'use strict';

const Generator = require('yeoman-generator');
const prettier = require('prettier');

const formatOptions = require('./templates/prettier.config');
const { base: baseQuestions, eslint: eslintQuestions } = require('./questions');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    this.writeObjectModuleJS = (filePath, object) => {
      let contents = `module.exports=${JSON.stringify(object)};`;
      contents = prettier.format(contents, formatOptions);
      this.fs.write(filePath, contents);
    };

    this.deleteConfigFile = () => {
      const configFilePath = this.destinationPath('.yo-rc.json');
      this.fs.delete(configFilePath);
    };
  }

  initializing() {
    this.log('initializing...');
  }

  async prompting() {
    const { promptValues } = this.config.getAll();
    if (promptValues) {
      return false;
    }

    this.deleteConfigFile();
    const { configs: baseAnswers } = await this.prompt(baseQuestions);
    const hasESLint = baseAnswers.includes('eslint');
    if (hasESLint) {
      await this.prompt(eslintQuestions);
    }
  }

  configuring() {
    this.log('configuring...');
  }

  install() {
    this.log('install');
  }
};

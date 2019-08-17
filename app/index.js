'use strict';

const Generator = require('yeoman-generator');
const prettier = require('prettier');

const formatOptions = require('./templates/prettier/prettier.config');
const { base: baseQuestions, eslint: eslintQuestions } = require('./questions');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('prompt', {
      alias: 'p',
      type: Boolean,
      default: false
    });

    this.writeObjectModuleJS = (filePath, object) => {
      let contents = `module.exports=${JSON.stringify(object)};`;
      contents = prettier.format(contents, formatOptions);
      this.fs.write(filePath, contents);
    };

    this.deleteConfigFile = () => {
      const configFilePath = this.destinationPath('.yo-rc.json');
      this.fs.delete(configFilePath);
    };

    this.copyConfigTemplateFile = (...path) => {
      const { length } = path;
      const file = path[length - 1];
      const templatePath = this.templatePath(...path);
      const destinationPath = this.destinationPath(file);
      this.fs.copy(templatePath, destinationPath);
    };
  }

  initializing() {
    this.log('initializing...');
  }

  async prompting() {
    const { options, config } = this;
    const { prompt } = options;
    const { promptValues } = config.getAll();
    if (!prompt && promptValues) {
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
    const config = this.config.getAll();
    const { promptValues } = config;
    const { configs: baseAnswers, eslint: eslintAnswers } = promptValues;
    this.log(eslintAnswers);

    if (baseAnswers.includes('editorconfig')) {
      this.copyConfigTemplateFile('editorconfig', '.editorconfig');
    }

    if (baseAnswers.includes('prettier')) {
      this.copyConfigTemplateFile('prettier', 'prettier.config.js');
      this.copyConfigTemplateFile('prettier', '.prettierignore');
    }
  }

  writing() {
    this.log('writing...');
  }

  install() {
    this.log('install...');
  }
};

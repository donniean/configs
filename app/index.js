'use strict';
const Generator = require('yeoman-generator');
const prettier = require('prettier');

const formatOptions = require('./templates/prettier.config');
const { base, eslint } = require('./questions');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    this.configs = null;

    this.getConfigsObject = list => {
      let config = {
        editorconfig: true,
        prettier: true
      };
      list.forEach(item => {
        config[item] = true;
      });
      return config;
    };

    this.writeObjectModuleJS = (filePath, object) => {
      let contents = `module.exports=${JSON.stringify(object)};`;
      contents = prettier.format(contents, formatOptions);
      this.fs.write(filePath, contents);
    };
  }

  async prompting() {
    const { getConfigsObject } = this;
    const baseQuestions = base;
    const eslintQuestions = eslint;
    const { configs: baseConfigs } = await this.prompt(baseQuestions);
    const hasESLint = baseConfigs.includes('eslint');
    let configs = getConfigsObject(baseConfigs);
    if (hasESLint) {
      const { eslint: preset } = await this.prompt(eslintQuestions);
      configs.eslint = preset;
    }
    this.configs = configs;
    console.log(this.configs);
  }

  configuring() {
    this.writeObjectModuleJS(this.destinationPath('configs.js'), this.configs);
  }

  install() {
    // this.installDependencies();
  }
};

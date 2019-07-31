'use strict';
const Generator = require('yeoman-generator');

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
      const contents = `module.exports=${JSON.stringify(object)};`;
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

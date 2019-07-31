'use strict';
const Generator = require('yeoman-generator');
const prettier = require('prettier');

const formatOptions = require('./templates/prettier.config');
const { base, eslint } = require('./questions');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    this.getConfigsObject = list => {
      let configs = {};
      list.forEach(item => {
        configs[item] = true;
      });
      return configs;
    };

    this.writeObjectModuleJS = (filePath, object) => {
      let contents = `module.exports=${JSON.stringify(object)};`;
      contents = prettier.format(contents, formatOptions);
      this.fs.write(filePath, contents);
    };

    this.config.save();
  }

  async prompting() {
    const c = this.config.getAll();
    console.log(c);

    /* const hasConfigsFile = this.fs.exists(this.configsFilePath);
    if (hasConfigsFile) {
      return;
    } */

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
    this.config.set(this.configs);
  }

  configuring() {
    /* const hasConfigsFile = this.fs.exists(this.configsFilePath);
    if (hasConfigsFile) {
      const configs = require(this.configsFilePath);
    } else {
    }
    console.log(configs); */
    // this.writeObjectModuleJS(this.destinationPath('configs.js'), this.configs);
  }

  install() {
    // this.installDependencies();
  }
};

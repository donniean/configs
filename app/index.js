'use strict';

const Generator = require('yeoman-generator');
const prettier = require('prettier');

const { base: baseQuestions, eslint: eslintQuestions } = require('./questions');

const formatOptions = require('./templates/prettier/prettier.config');
const eslintConfigs = require('./templates/eslint/rules');
const stylelintConfig = require('./templates/stylelint/stylelint.config');

const {
  integratePrettier: integrateESLintPrettier,
  getPackages: getESLintPackages
} = require('./utils/eslint');
const {
  integratePrettier: integrateStylelintPrettier,
  getPackages: getStylelintPackages
} = require('./utils/stylelint');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('prompt', {
      alias: 'p',
      type: Boolean,
      default: false
    });

    this.devDependenciesPackages = [];

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
    const packageJsonFilePath = this.destinationPath('package.json');
    const hasPackageJsonFile = this.fs.exists(packageJsonFilePath);
    if (!hasPackageJsonFile) {
      this.spawnCommandSync('npm init');
    }
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
    const { configs: baseAnswers, eslint: eslintPreset } = promptValues;

    const hasEditorConfig = baseAnswers.includes('editorconfig');
    const hasPrettier = baseAnswers.includes('prettier');
    const hasESLint = baseAnswers.includes('eslint');
    const hasStylelint = baseAnswers.includes('stylelint');
    const hasLintStaged = baseAnswers.includes('lint-staged');
    const hasHTMLHint = baseAnswers.includes('htmlhint');
    const hasGitignore = baseAnswers.includes('gitignore');
    const hasGitattributes = baseAnswers.includes('gitattributes');
    const hasLicense = baseAnswers.includes('license');

    if (hasEditorConfig) {
      this.copyConfigTemplateFile('editorconfig', '.editorconfig');
    }

    if (hasPrettier) {
      this.copyConfigTemplateFile('prettier', 'prettier.config.js');
      this.copyConfigTemplateFile('prettier', '.prettierignore');
      this.devDependenciesPackages.push('prettier');
    }

    if (hasESLint) {
      const filePath = this.destinationPath('.eslintrc.js');
      const packages = getESLintPackages({
        preset: eslintPreset,
        prettier: hasPrettier
      });
      let config = eslintConfigs[eslintPreset];
      config = integrateESLintPrettier({ preset: eslintPreset, config });
      this.writeObjectModuleJS(filePath, config);
      this.copyConfigTemplateFile('eslint', '.eslintignore');
      this.devDependenciesPackages.push(...packages);
    }

    if (hasStylelint) {
      const filePath = this.destinationPath('stylelint.config.js');
      const packages = getStylelintPackages({ prettier: hasPrettier });
      const config = integrateStylelintPrettier({ config: stylelintConfig });
      this.writeObjectModuleJS(filePath, config);
      this.devDependenciesPackages.push(...packages);
    }

    if (hasLintStaged) {
      //
    }

    if (hasHTMLHint) {
      //
    }

    if (hasGitignore) {
      //
    }

    if (hasGitattributes) {
      //
    }

    if (hasLicense) {
      //
    }
  }

  writing() {
    this.log('writing...');
  }

  install() {
    this.log('install...');
    this.log(this.devDependenciesPackages);
    // this.npmInstall('prettier', { 'save-dev': true });
  }
};

const { prompt } = require('inquirer');
const { isEmpty } = require('lodash');

const {
  base: baseQuestions,
  eslint: eslintQuestions,
  stylelint: stylelintQuestions
} = require('./questions');

module.exports = async () => {
  const conf = {};
  const { configs: baseAnswers } = await prompt(baseQuestions);
  baseAnswers.forEach((key) => {
    conf[key] = true;
  });
  const hasESLint = conf.eslint;
  const hasStylelint = conf.stylelint;
  if (hasESLint) {
    const { eslint } = await prompt(eslintQuestions);

    conf.eslint = [
      true,
      {
        [eslint]: true
      }
    ];
  }
  if (hasStylelint) {
    const { stylelint } = await prompt(stylelintQuestions);
    const object = {};
    stylelint.forEach((key) => {
      object[key] = true;
    });
    if (!isEmpty(object)) {
      conf.stylelint = [true, object];
    }
  }

  console.log(conf);
};

/* module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('prompt', {
      alias: 'p',
      type: Boolean,
      default: false,
    });

    this.tips = (...yo) => {
      this.log(yellow(...rest));
    };

    this.composeWithGenerator = (path) => {
      this.composeWith(require.resolve(path));
    };
  }

  initializing() {
    /!* cspell:disable-next-line *!/
    this.log(yosay('Welcome to Configs generator'));
    this.tips('initializing...');
    const packageJsonFilePath = this.destinationPath('package.json');
    const hasPackageJsonFile = this.fs.exists(packageJsonFilePath);
    if (!hasPackageJsonFile) {
      throw new Error('Please run command "npm init" first');
    }
  }

  async prompting() {
    const { options, config } = this;
    const { prompt } = options;
    const { promptValues } = config.getAll();
    if (!prompt && promptValues) {
      return;
    }

    this.tips('prompting...');
    const { configs: baseAnswers } = await this.prompt(baseQuestions);
    const hasESLint = baseAnswers.includes('eslint');
    const hasStylelint = baseAnswers.includes('stylelint');
    if (hasESLint) {
      await this.prompt(eslintQuestions);
    }
    if (hasStylelint) {
      await this.prompt(stylelintQuestions);
    }
  }

  writing() {
    this.tips('writing...');
    const config = this.config.getAll();
    const { promptValues } = config;
    const { configs: baseAnswers } = promptValues;

    const hasEditorConfig = baseAnswers.includes('editorconfig');
    const hasPrettier = baseAnswers.includes('prettier');
    const hasESLint = baseAnswers.includes('eslint');
    const hasStylelint = baseAnswers.includes('stylelint');
    const hasHTMLHint = baseAnswers.includes('htmlhint');
    const hasCspell = baseAnswers.includes('cspell');
    const hasCommitlint = baseAnswers.includes('commitlint');
    const hasLintStaged = baseAnswers.includes('lint-staged');
    const hasGitignore = baseAnswers.includes('gitignore');
    const hasGitattributes = baseAnswers.includes('gitattributes');
    const hasLicense = baseAnswers.includes('license');
    const hasPrivate = baseAnswers.includes('private');

    if (hasEditorConfig) {
      this.composeWithGenerator('../editorconfig');
    }

    if (hasPrettier) {
      this.composeWithGenerator('../prettier');
    }

    if (hasESLint) {
      this.composeWithGenerator('../eslint');
    }

    if (hasStylelint) {
      this.composeWithGenerator('../stylelint');
    }

    if (hasHTMLHint) {
      this.composeWithGenerator('../htmlhint');
    }

    if (hasCspell) {
      this.composeWithGenerator('../cspell');
    }

    if (hasCommitlint) {
      this.composeWithGenerator('../commitlint');
      this.composeWithGenerator('../commitizen');
    }

    if (hasLintStaged) {
      this.composeWithGenerator('../husky');
      this.composeWithGenerator('../lint-staged');
    }

    if (hasGitignore) {
      this.composeWithGenerator('../gitignore');
    }

    if (hasGitattributes) {
      this.composeWithGenerator('../gitattributes');
    }

    if (hasLicense) {
      this.composeWithGenerator('../license');
    }

    if (hasPrivate) {
      this.composeWithGenerator('../private');
    }

    this.composeWithGenerator('../npm-lint');

    this.composeWithGenerator('../sort-package-json');
  }

  end() {
    this.tips('Everything is OK, Thanks! Please run "npm install".');
  }
}; */

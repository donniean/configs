const yargs = require('yargs');
const { prompt } = require('inquirer');
const { isEmpty } = require('lodash');

const packageJson = require('../utils/package-json');
const { error, success } = require('../utils/console');
const configFile = require('../utils/config-file');
const defaultConfig = require('./default-config');
const {
  getBaseQuestions,
  getEslintQuestions,
  getStylelintQuestions,
} = require('./questions');

const promptQuestions = async ({ configParsed }) => {
  const c = {};
  const baseQuestions = getBaseQuestions({ configParsed });
  const { configs: baseAnswers } = await prompt(baseQuestions);
  baseAnswers.forEach((key) => {
    c[key] = true;
  });
  const hasESLint = c.eslint;
  const hasStylelint = c.stylelint;
  if (hasESLint) {
    const eslintQuestions = getEslintQuestions({ configParsed });
    const { eslint } = await prompt(eslintQuestions);

    c.eslint = [
      true,
      {
        [eslint]: true,
      },
    ];
  }
  if (hasStylelint) {
    const stylelintQuestions = getStylelintQuestions({ configParsed });
    const { stylelint } = await prompt(stylelintQuestions);
    const object = {};
    stylelint.forEach((key) => {
      object[key] = true;
    });
    if (!isEmpty(object)) {
      c.stylelint = [true, object];
    }
  }
  return c;
};

const handleModules = ({ configParsed }) => {
  const {
    editorconfig = [],
    prettier = [],
    eslint = [],
    stylelint = [],
    htmlhint = [],
    cspell = [],
    commitlint = [],
    'lint-staged': lintStaged = [],
    gitignore = [],
    gitattributes = [],
    license = [],
    private = [],
  } = configParsed;

  if (editorconfig[0]) {
    require('../editorconfig')();
  }

  if (prettier[0]) {
    require('../prettier')();
  }

  /*
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

  this.composeWithGenerator('../sort-package-json'); */
};

module.exports = async () => {
  const hasPackageJson = packageJson.existsSync();
  if (!hasPackageJson) {
    error('Error: Please run command "npm init" first');
    return;
  }

  const { argv } = yargs
    .options({
      p: {
        alias: 'prompt',
        type: 'boolean',
        desc: 'prompt questions',
      },
    })
    .help()
    .alias('h', 'help')
    .version()
    .alias('v', 'version');

  const { prompt: isPrompt } = argv;
  const currentConfig = configFile.readSync();
  let config = defaultConfig;

  if (currentConfig) {
    if (isPrompt) {
      const configParsed = configFile.parse({ config: currentConfig });
      config = await promptQuestions({ configParsed });
      configFile.writeSync({ config });
      success('.configsrc.js has been overwritten');
    } else {
      config = currentConfig;
    }
  } else {
    const configParsed = configFile.parse({ config });
    config = await promptQuestions({ configParsed });
    configFile.writeSync({ config });
    success('.configsrc.js has been created');
  }

  const configParsed = configFile.parse({ config });

  handleModules({ configParsed });
};

/* module.exports = class extends Generator {
  end() {
    this.tips('Everything is OK, Thanks! Please run "npm install".');
  }
}; */

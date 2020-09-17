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

const handleModules = async ({ configParsed }) => {
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
    private: isPrivate = [],
  } = configParsed;

  if (editorconfig[0]) {
    // eslint-disable-next-line global-require
    await require('../editorconfig')();
  }

  if (prettier[0]) {
    // eslint-disable-next-line global-require
    await require('../prettier')();
  }

  if (eslint[0]) {
    // eslint-disable-next-line global-require
    await require('../eslint')({ configParsed });
  }

  if (stylelint[0]) {
    // eslint-disable-next-line global-require
    await require('../stylelint')({ configParsed });
  }

  if (htmlhint[0]) {
    // eslint-disable-next-line global-require
    await require('../htmlhint')();
  }

  if (cspell[0]) {
    // eslint-disable-next-line global-require
    await require('../cspell')();
  }

  if (commitlint[0]) {
    // eslint-disable-next-line global-require
    await require('../commitlint')();
    // eslint-disable-next-line global-require
    await require('../commitizen')();
  }

  if (lintStaged[0]) {
    // eslint-disable-next-line global-require
    await require('../husky')({ configParsed });
    // eslint-disable-next-line global-require
    await require('../lint-staged')({ configParsed });
  }

  if (gitignore[0]) {
    // eslint-disable-next-line global-require
    await require('../gitignore')();
  }

  if (gitattributes[0]) {
    // eslint-disable-next-line global-require
    await require('../gitattributes')();
  }

  if (license[0]) {
    // eslint-disable-next-line global-require
    await require('../license')();
  }

  if (isPrivate) {
    // eslint-disable-next-line global-require
    await require('../private')();
  }

  // eslint-disable-next-line global-require
  await require('../npm-lint')();

  // eslint-disable-next-line global-require
  await require('../sort-package-json')();
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

  await handleModules({ configParsed });
};

/* module.exports = class extends Generator {
  end() {
    this.tips('Everything is OK, Thanks! Please run "npm install".');
  }
}; */

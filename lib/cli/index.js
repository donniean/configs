const yargs = require('yargs');
const { prompt } = require('inquirer');
const { isEmpty } = require('lodash');
const ora = require('ora');
const { blue } = require('chalk');

const packageJson = require('../utils/package-json');
const { error, success, successBold } = require('../utils/console');
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

const run = async (name, func) => {
  ora().info(blue(name));
  await func();
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
    'private-package': privatePackage = [],
  } = configParsed;

  if (editorconfig[0]) {
    // eslint-disable-next-line global-require
    await run('EditorConfig', require('../editorconfig'));
  }

  if (prettier[0]) {
    // eslint-disable-next-line global-require
    await run('Prettier', require('../prettier'));
  }

  if (eslint[0]) {
    await run('ESLint', async () => {
      // eslint-disable-next-line global-require
      await require('../eslint')({ configParsed });
    });
  }

  if (stylelint[0]) {
    await run('stylelint', async () => {
      // eslint-disable-next-line global-require
      await require('../stylelint')({ configParsed });
    });
  }

  if (htmlhint[0]) {
    // eslint-disable-next-line global-require
    await run('HTMLHint', require('../htmlhint'));
  }

  if (cspell[0]) {
    // eslint-disable-next-line global-require
    await run('cspell', require('../cspell'));
  }

  if (commitlint[0]) {
    // eslint-disable-next-line global-require
    await run('commitlint', require('../commitlint'));
    // eslint-disable-next-line global-require
    await run('Commitizen', require('../commitizen'));
  }

  if (lintStaged[0]) {
    await run('Husky', async () => {
      // eslint-disable-next-line global-require
      await require('../husky')({ configParsed });
    });
    await run('lint-staged', async () => {
      // eslint-disable-next-line global-require
      await require('../lint-staged')({ configParsed });
    });
  }

  if (gitignore[0]) {
    // eslint-disable-next-line global-require
    await run('.gitignore', require('../gitignore'));
  }

  if (gitattributes[0]) {
    // eslint-disable-next-line global-require
    await run('.gitattributes', require('../gitattributes'));
  }

  if (license[0]) {
    // eslint-disable-next-line global-require
    await run('LICENSE (MIT)', require('../license'));
  }

  if (privatePackage[0]) {
    // eslint-disable-next-line global-require
    await run('Private (package.json)', require('../private-package'));
  }

  // eslint-disable-next-line global-require
  await run('npm lint', require('../npm-lint'));

  // eslint-disable-next-line global-require
  await run('sort package.json', require('../sort-package-json'));
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
    successBold('.configsrc.js has been created');
  }

  const configParsed = configFile.parse({ config });

  await handleModules({ configParsed });

  success('Everything is OK, Thanks! Please run "npm install".');
};

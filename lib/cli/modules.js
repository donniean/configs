const ora = require('ora');
const { blue } = require('chalk');

const run = async (name, func) => {
  ora().info(blue(name));
  await func();
};

module.exports = async ({ parsedConfig }) => {
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
  } = parsedConfig;

  if (editorconfig[0]) {
    // eslint-disable-next-line global-require
    await run('EditorConfig', require('../editorconfig'));
  }

  if (prettier[0]) {
    await run('Prettier', async () => {
      // eslint-disable-next-line global-require
      await require('../prettier')({ parsedConfig });
    });
  }

  if (eslint[0]) {
    await run('ESLint', async () => {
      // eslint-disable-next-line global-require
      await require('../eslint')({ parsedConfig });
    });
  }

  if (stylelint[0]) {
    await run('stylelint', async () => {
      // eslint-disable-next-line global-require
      await require('../stylelint')({ parsedConfig });
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
      await require('../husky')({ parsedConfig });
    });
    await run('lint-staged', async () => {
      // eslint-disable-next-line global-require
      await require('../lint-staged')({ parsedConfig });
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

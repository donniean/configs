const yargs = require('yargs');
const { bold } = require('chalk');

const {
  NO_LANGUAGES,
  JSX_AND_VUE_ERROR,
  SCSS_AND_LESS_ERROR,
} = require('../constants/messages');
const packageJson = require('../utils/package-json');
const { success, successBold } = require('../utils/console');
const configFile = require('../utils/config-file');
const defaultConfig = require('./default-config');
const prompt = require('./prompt');
const handleModules = require('./modules');

module.exports = async () => {
  const hasPackageJson = packageJson.existsSync();
  if (!hasPackageJson) {
    throw new Error(bold.red('Error: Please run command "npm init" first'));
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
    const configParsed = configFile.parse({ config: currentConfig });
    const { languages = [] } = configParsed;

    if (languages.length === 0) {
      throw new Error(bold.red(NO_LANGUAGES));
    }
    if (languages.includes('jsx') && languages.includes('vue')) {
      throw new Error(bold.red(JSX_AND_VUE_ERROR));
    }
    if (languages.includes('less') && languages.includes('scss')) {
      throw new Error(bold.red(SCSS_AND_LESS_ERROR));
    }

    if (isPrompt) {
      config = await prompt({ configParsed });
      configFile.writeSync({ config });
      success('.configsrc.js has been overwritten');
    } else {
      config = currentConfig;
    }
  } else {
    const configParsed = configFile.parse({ config });
    config = await prompt({ configParsed });
    configFile.writeSync({ config });
    successBold('.configsrc.js has been created');
  }

  const configParsed = configFile.parse({ config });
  await handleModules({ configParsed });

  success('Everything is OK, Thanks! Please run "npm install".');
};

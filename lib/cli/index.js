const yargs = require('yargs');
const { bold } = require('chalk');
const { get, isEmpty } = require('lodash');

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
  let config = null;

  if (currentConfig) {
    const lastParsedConfig = configFile.parse({ config: currentConfig });
    const { languages = {} } = lastParsedConfig;

    if (isEmpty(languages)) {
      throw new Error(bold.red(NO_LANGUAGES));
    }
    if (get(languages, ['jsx', 0]) && get(languages, ['vue', 0])) {
      throw new Error(bold.red(JSX_AND_VUE_ERROR));
    }
    if (get(languages, ['scss', 0]) && get(languages, ['less', 0])) {
      throw new Error(bold.red(SCSS_AND_LESS_ERROR));
    }

    if (isPrompt) {
      config = await prompt({ lastParsedConfig });
      configFile.writeSync({ config });
      success('.configsrc.js has been overwritten');
    } else {
      config = currentConfig;
    }
  } else {
    const lastParsedConfig = configFile.parse({ config: defaultConfig });
    config = await prompt({ lastParsedConfig });
    configFile.writeSync({ config });
    successBold('.configsrc.js has been created');
  }

  const parsedConfig = configFile.parse({ config });
  await handleModules({ parsedConfig });

  success('Everything is OK, Thanks! Please run "npm install".');
};

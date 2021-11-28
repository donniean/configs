import {bold} from 'chalk';
import {get, isEmpty} from 'lodash';
import yargs from 'yargs';

import handleModules from '@/cli/modules';
import prompt from '@/cli/prompt';
import {
  JS_IS_REQUIRED_CAUSE_JSX,
  NO_LANGUAGES,
  SCSS_AND_LESS_ERROR,
} from '@/constants/messages';
import * as configFile from '@/utils/config-file';
import {command, success, successBold} from '@/utils/console';
import * as defaultConfig from '@/utils/default-config';
import * as packageJson from '@/utils/package-json';

export default async () => {
  const hasPackageJson = packageJson.existsSync();
  if (!hasPackageJson) {
    throw new Error(bold.red('Error: Please run command "npm init" first'));
  }

  const {argv} = yargs
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

  const {prompt: isPrompt} = argv;
  const lastConfig = configFile.readSync();
  let config = null;

  if (lastConfig) {
    const lastParsedConfig = configFile.parse({config: lastConfig});
    const {languages = {}} = lastParsedConfig;

    if (isEmpty(languages)) {
      throw new Error(bold.red(NO_LANGUAGES));
    }
    if (get(languages, ['jsx', 0]) && !get(languages, ['js', 0])) {
      throw new Error(bold.red(JS_IS_REQUIRED_CAUSE_JSX));
    }
    if (get(languages, ['scss', 0]) && get(languages, ['less', 0])) {
      throw new Error(bold.red(SCSS_AND_LESS_ERROR));
    }

    if (isPrompt) {
      config = await prompt({lastParsedConfig});
      configFile.writeSync({config});
      success('.configsrc.js has been overwritten');
    } else {
      config = lastConfig;
    }
  } else {
    const lastParsedConfig = configFile.parse({config: defaultConfig});
    config = await prompt({lastParsedConfig});
    configFile.writeSync({config});
    successBold('.configsrc.js has been created');
  }

  const parsedConfig = configFile.parse({config});
  await handleModules({parsedConfig});

  success('Everything is OK, Thanks! Please run: ');
  command('npm install');
};

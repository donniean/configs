const { prompt } = require('inquirer');

const configFile = require('../utils/config-file');
const {
  getLanguagesQuestions,
  getEnvQuestions,
  getOptionsQuestions,
  getDisabledQuestions,
} = require('./questions');

const promptLanguages = async ({ lastParsedConfig }) => {
  const questions = getLanguagesQuestions({ lastParsedConfig });
  const { languages = [] } = await prompt(questions);
  return configFile.arrayToObject(languages);
};

const promptEnv = async ({ lastParsedConfig }) => {
  const questions = getEnvQuestions({ lastParsedConfig });
  const { env = '' } = await prompt(questions);
  return env;
};

const promptOptions = async ({ lastParsedConfig }) => {
  const questions = getOptionsQuestions({ lastParsedConfig });
  const { options = [] } = await prompt(questions);
  return configFile.arrayToObject(options);
};

const promptDisabled = async ({ lastParsedConfig }) => {
  const questions = getDisabledQuestions({ lastParsedConfig });
  const { disabled = [] } = await prompt(questions);
  return configFile.arrayToObject(disabled);
};

module.exports = async ({ lastParsedConfig }) => {
  const languages = await promptLanguages({ lastParsedConfig });

  let env = '';
  if (languages.js || languages.jsx || languages.vue) {
    env = await promptEnv({ lastParsedConfig, languages });
  }

  const options = await promptOptions({ lastParsedConfig });

  const disabled = await promptDisabled({ lastParsedConfig });

  const config = {};
  if (Object.keys(languages).filter((value) => value).length > 0) {
    config.languages = languages;
  }
  if (env.trim()) {
    config.env = env;
  }
  if (Object.keys(options).filter((value) => value).length > 0) {
    config.options = options;
  }
  if (Object.keys(disabled).filter((value) => value).length > 0) {
    config.disabled = disabled;
  }

  return config;
};

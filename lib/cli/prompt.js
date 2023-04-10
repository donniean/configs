const { prompt } = require('inquirer');

const configFile = require('../utils/config-file');
const {
  getLanguagesQuestions,
  getEnvQuestions,
  getModulesQuestions,
  getESLintOptionsQuestions,
  getESLintPluginSimpleImportSortOptionsQuestions,
  getStylelintOptionsQuestions,
} = require('./questions');

const promptLanguages = async ({ lastParsedConfig }) => {
  const questions = getLanguagesQuestions({ lastParsedConfig });
  const { languages = [] } = await prompt(questions);
  return configFile.arrayToObject(languages);
};

const promptEnv = async ({ lastParsedConfig, parsedLanguages }) => {
  const questions = getEnvQuestions({ lastParsedConfig, parsedLanguages });
  const { env = '' } = await prompt(questions);
  return env;
};

const promptModules = async ({ lastParsedConfig, parsedLanguages }) => {
  const questions = getModulesQuestions({ lastParsedConfig, parsedLanguages });
  const { modules = [] } = await prompt(questions);
  return configFile.arrayToObject(modules);
};

const promptESLintOptions = async ({ lastParsedConfig }) => {
  const questions = getESLintOptionsQuestions({ lastParsedConfig });
  const { 'eslint-options': options = [] } = await prompt(questions);
  return configFile.arrayToObject(options);
};

const promptESLintPluginSimpleImportSortOptions = async ({
  lastParsedConfig,
}) => {
  const questions = getESLintPluginSimpleImportSortOptionsQuestions({
    lastParsedConfig,
  });
  const {
    'eslint-plugin-simple-import-sort-files': eslintPluginSimpleImportSortFiles = '',
  } = await prompt(questions);
  return {
    files: eslintPluginSimpleImportSortFiles
      .split(',')
      .map((path) => path.trim()),
  };
};

const promptStylelintOptions = async ({ lastParsedConfig }) => {
  const questions = getStylelintOptionsQuestions({ lastParsedConfig });
  const { 'stylelint-options': options = [] } = await prompt(questions);
  return configFile.arrayToObject(options);
};

module.exports = async ({ lastParsedConfig }) => {
  const languages = await promptLanguages({ lastParsedConfig });
  const parsedLanguages = configFile.booleanValuesToArray(languages);

  let env = '';
  if (languages.js || languages.jsx || languages.vue) {
    env = await promptEnv({ lastParsedConfig, parsedLanguages });
  }

  const modules = await promptModules({ lastParsedConfig, parsedLanguages });

  const { eslint } = modules;
  if (eslint) {
    const eslintOptions = await promptESLintOptions({ lastParsedConfig });
    const {
      'eslint-plugin-simple-import-sort': eslintPluginSimpleImportSort,
    } = eslintOptions;
    if (eslintPluginSimpleImportSort) {
      const eslintPluginSimpleImportSortOptions = await promptESLintPluginSimpleImportSortOptions(
        {
          lastParsedConfig,
        }
      );
      modules.eslint = [
        true,
        {
          'eslint-plugin-simple-import-sort': [
            true,
            eslintPluginSimpleImportSortOptions,
          ],
        },
      ];
    }
  }

  const { stylelint } = modules;
  if (stylelint) {
    const stylelintOptions = await promptStylelintOptions({ lastParsedConfig });
    const { 'styled-components': styledComponents } = stylelintOptions;
    if (styledComponents) {
      modules.stylelint = [true, { 'styled-components': true }];
    }
  }

  const config = {};
  if (Object.keys(languages).filter((value) => value).length > 0) {
    config.languages = languages;
  }
  if (env.trim()) {
    config.env = env;
  }
  if (Object.keys(modules).filter((value) => value).length > 0) {
    config.modules = modules;
  }

  return config;
};

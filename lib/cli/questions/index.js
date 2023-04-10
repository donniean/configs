const getLanguagesQuestions = require('./languages');
const getEnvQuestions = require('./env');
const getModulesQuestions = require('./modules');
const getESLintOptionsQuestions = require('./eslint-options');
const getESLintPluginSimpleImportSortOptionsQuestions = require('./eslint-plugin-simple-import-sort-options');
const getStylelintOptionsQuestions = require('./stylelint-options');

module.exports = {
  getLanguagesQuestions,
  getEnvQuestions,
  getModulesQuestions,
  getESLintOptionsQuestions,
  getESLintPluginSimpleImportSortOptionsQuestions,
  getStylelintOptionsQuestions,
};

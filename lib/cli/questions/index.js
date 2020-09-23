const getLanguagesQuestions = require('./languages');
const getConfigsQuestions = require('./configs');
const getEslintPresetQuestions = require('./eslint-preset');
const getStylelintQuestions = require('./stylelint');

module.exports = {
  getLanguagesQuestions,
  getConfigsQuestions,
  getEslintPresetQuestions,
  getStylelintQuestions,
};

const getLanguagesQuestions = require('./languages');
const getEnvQuestions = require('./envs');
const getModulesQuestions = require('./modules');
const getStylelintQuestions = require('./stylelint');

module.exports = {
  getLanguagesQuestions,
  getEnvQuestions,
  getModulesQuestions,
  getStylelintQuestions,
};

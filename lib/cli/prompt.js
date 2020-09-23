const { prompt } = require('inquirer');
const { isEmpty } = require('lodash');

const {
  // getLanguagesQuestions,
  getEnvQuestions,
  getModulesQuestions,
  getStylelintQuestions,
} = require('./questions');

/* const promptLanguages = async ({ configParsed }) => {
  const languagesQuestions = getLanguagesQuestions({ configParsed });
  const languagesAnswers = await prompt(languagesQuestions);
  return { ...configParsed, ...languagesAnswers };
};

const promptEnv = async ({ configParsed }) => {};

const promptModules = async ({ configParsed }) => {};

const promptStylelint = async ({ configParsed }) => {}; */

module.exports = async ({ configParsed }) => {
  let c = {};

  const envQuestions = getEnvQuestions({ configParsed });
  const envAnswers = await prompt(envQuestions);
  c = { ...c, ...envAnswers };

  const modulesQuestions = getModulesQuestions({ configParsed });
  const { modules: modulesAnswers } = await prompt(modulesQuestions);
  if (modulesAnswers.length > 0) {
    c.modules = {};
    modulesAnswers.forEach((key) => {
      c.modules[key] = true;
    });
  }

  const hasESLint = c.eslint;
  const hasStylelint = c.stylelint;
  if (hasESLint) {
    const eslintQuestions = getEnvQuestions({ configParsed });
    const { 'eslint-preset': preset } = await prompt(eslintQuestions);

    c.eslint = [true, { preset }];
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

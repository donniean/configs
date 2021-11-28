import getEnvQuestions from '@/cli/questions/env';
import getESLintOptionsQuestions from '@/cli/questions/eslint-options';
import getESLintPluginImportResolverOptionsQuestions
  from '@/cli/questions/eslint-plugin-import-resolver-options';
import getESLintPluginSimpleImportSortOptionsQuestions
  from '@/cli/questions/eslint-plugin-simple-import-sort-options';
import getLanguagesQuestions from '@/cli/questions/languages';
import getModulesQuestions from '@/cli/questions/modules';
import getStylelintOptionsQuestions from '@/cli/questions/stylelint-options';

export {
  getLanguagesQuestions,
  getEnvQuestions,
  getModulesQuestions,
  getESLintOptionsQuestions,
  getESLintPluginSimpleImportSortOptionsQuestions,
  getESLintPluginImportResolverOptionsQuestions,
  getStylelintOptionsQuestions,
};

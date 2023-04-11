import type { PromptObject } from 'prompts';

import type {
  ESLintExtension,
  PrettierExtension,
  StylelintExtension,
  TscExtension,
} from './extensions';
import type { ESLintOption, FeatureKey } from './features';

type QuestionName =
  | 'featureKeys'
  | 'prettierExtensions'
  | 'tscExtensions'
  | 'eslintExtensions'
  | 'eslintOptions'
  | 'stylelintExtensions'
  | 'cspellExtensions';

export type CreateQuestions = PromptObject<QuestionName>[];

export interface CreateAnswers {
  featureKeys: FeatureKey[];
  prettierExtensions?: PrettierExtension[];
  tscExtensions?: TscExtension[];
  eslintExtensions?: ESLintExtension[];
  eslintOptions?: ESLintOption[];
  stylelintExtensions?: StylelintExtension[];
  cspellExtensions?: string[];
}

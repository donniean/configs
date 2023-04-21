import type { PromptObject } from 'prompts';

import type { ESLintPlugin, FeatureKey } from '@/types/features';

type QuestionName = 'featureKeys' | 'eslintPlugins';

export type InitQuestions = PromptObject<QuestionName>[];

export interface InitAnswers {
  featureKeys: FeatureKey[];
  eslintPlugins?: ESLintPlugin[];
}

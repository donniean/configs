import type { PromptObject } from 'prompts';

import type { ESLintPlugin, FeatureKey } from '@/types/features';

type QuestionName = 'featureKeys' | 'eslintPlugins';

type InitQuestions = PromptObject<QuestionName>[];

interface InitAnswers {
  featureKeys: FeatureKey[];
  eslintPlugins?: ESLintPlugin[];
}

export type { InitAnswers, InitQuestions };

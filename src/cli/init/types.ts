import type { PromptObject } from 'prompts';

import type { FeatureKey } from '@/types/features';

type QuestionName = 'featureKeys';

type InitQuestions = PromptObject<QuestionName>[];

interface InitAnswers {
  featureKeys: FeatureKey[];
}

export type { InitAnswers, InitQuestions };

import * as process from 'node:process';

import prompts from 'prompts';

import { DEFAULT_CONFIGS_CONFIG } from '@/constants/configs-config';
import { FEATURE_OPTIONS } from '@/constants/features';
import type { ConfigsConfig } from '@/types/configs-config';

import type { InitQuestions } from './types';

interface GetQuestionsOptions {
  currentConfigsConfig?: ConfigsConfig;
}

function getQuestions(options?: GetQuestionsOptions) {
  const configsConfig = options?.currentConfigsConfig ?? DEFAULT_CONFIGS_CONFIG;

  const questions: InitQuestions = [
    {
      type: 'multiselect',
      name: 'featureKeys',
      message: 'select features',
      choices: FEATURE_OPTIONS.map(({ key, displayName }) => ({
        value: key,
        title: displayName,
        selected: Boolean(configsConfig.features?.[key]),
      })),
    },
  ];

  return questions.map((question) => ({
    optionsPerPage: Number.POSITIVE_INFINITY,
    ...question,
  }));
}

interface PromptOptions {
  currentConfigsConfig?: ConfigsConfig;
}

export default async function prompt(options?: PromptOptions) {
  const questions = getQuestions(options);
  return prompts(questions, {
    // eslint-disable-next-line unicorn/no-process-exit, n/no-process-exit
    onCancel: () => process.exit(0),
  });
}

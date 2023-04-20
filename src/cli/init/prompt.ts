import * as process from 'node:process';

import { get } from 'lodash';
import prompts from 'prompts';

import { DEFAULT_CONFIGS_CONFIG } from '@/constants/configs-config';
import {
  ESLINT_PLUGIN_OPTIONS,
  FEATURE_KEY_MAP,
  FEATURE_OPTIONS,
} from '@/constants/features';
import type { ConfigsConfig } from '@/types/configs-config';
import type { FeatureKey } from '@/types/features';

import type { InitAnswers, InitQuestions } from './types';

interface GetQuestionsOptions {
  currentConfigsConfig?: ConfigsConfig;
}

function getQuestions(options?: GetQuestionsOptions) {
  const configsConfig = options?.currentConfigsConfig ?? DEFAULT_CONFIGS_CONFIG;

  const getOptionSelected = (featureKey: FeatureKey, path: string[]) => {
    const hasFeature = configsConfig.features?.[featureKey];
    const finalPath = ['features', featureKey, ...path];
    const defaultValue = false;
    return Boolean(
      hasFeature
        ? get(configsConfig, finalPath, defaultValue)
        : get(DEFAULT_CONFIGS_CONFIG, finalPath, defaultValue)
    );
  };

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
    {
      type: (_prev, values: InitAnswers) =>
        values.featureKeys.includes('eslint') ? 'multiselect' : null,
      name: 'eslintPlugins',
      message: 'select ESLint Plugins',
      choices: ESLINT_PLUGIN_OPTIONS.map(({ key, displayName }) => ({
        value: key,
        title: displayName,
        selected: getOptionSelected(FEATURE_KEY_MAP.eslint, ['plugins', key]),
      })),
    },
  ];

  return questions.map(question => ({
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
    // eslint-disable-next-line unicorn/no-process-exit
    onCancel: () => process.exit(0),
  });
}

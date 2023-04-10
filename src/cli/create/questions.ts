import { get } from 'lodash';

import { DEFAULT_CONFIGS_CONFIG } from '@/constants/configs-config';
import {
  ESLINT_EXTENSIONS,
  PRETTIER_EXTENSIONS,
  STYLELINT_EXTENSIONS,
  TSC_EXTENSIONS,
} from '@/constants/extensions';
import {
  ESLINT_OPTION_OPTIONS,
  FEATURE_KEY_MAP,
  FEATURE_OPTIONS,
  LINT_STAGED_OPTION_OPTIONS,
  STYLELINT_OPTION_OPTIONS,
} from '@/constants/features';
import type { ConfigsConfig } from '@/types/configs-config';
import type { FeatureKey } from '@/types/features';
import type { CreateAnswers, CreateQuestions } from '@/types/prompts';

interface GetQuestionsOptions {
  currentConfigsConfig?: ConfigsConfig;
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export function getQuestions(options?: GetQuestionsOptions) {
  const configsConfig = options?.currentConfigsConfig ?? DEFAULT_CONFIGS_CONFIG;

  const getExtensionSelected = <T>(featureKey: FeatureKey, extension: T) => {
    const hasFeature = configsConfig.features?.[featureKey];
    const path = `features.${featureKey}.extensions`;
    const defaultValue: T[] = [];
    return hasFeature
      ? get(configsConfig, path, defaultValue).includes(extension)
      : get(DEFAULT_CONFIGS_CONFIG, path, defaultValue).includes(extension);
  };

  const getExtensionsInitial = (featureKey: FeatureKey) => {
    const hasFeature = configsConfig.features?.[featureKey];
    const path = `features.${featureKey}.extensions`;
    const defaultValue: string[] = [];
    return hasFeature
      ? get(configsConfig, path, defaultValue).join(',')
      : get(DEFAULT_CONFIGS_CONFIG, path, defaultValue).join(',');
  };

  const getOptionSelected = <T extends string>(
    featureKey: FeatureKey,
    key: T
  ) => {
    const hasFeature = configsConfig.features?.[featureKey];
    const path = `features.${featureKey}.options.${key}`;
    const defaultValue = false;
    return hasFeature
      ? get(configsConfig, path, defaultValue)
      : get(DEFAULT_CONFIGS_CONFIG, path, defaultValue);
  };

  const questions: CreateQuestions = [
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
      type: (_prev, values: CreateAnswers) =>
        values.featureKeys.includes('prettier') ? 'multiselect' : null,
      name: 'prettierExtensions',
      message: `select Prettier extensions`,
      choices: PRETTIER_EXTENSIONS.map((extension) => ({
        value: extension,
        title: extension,
        selected: getExtensionSelected(FEATURE_KEY_MAP.prettier, extension),
      })),
    },
    {
      type: (_prev, values: CreateAnswers) =>
        values.featureKeys.includes('tsc') ? 'multiselect' : null,
      name: 'tscExtensions',
      message: 'select tsc extensions',
      choices: TSC_EXTENSIONS.map((extension) => ({
        value: extension,
        title: extension,
        selected: getExtensionSelected(FEATURE_KEY_MAP.tsc, extension),
      })),
    },
    {
      type: (_prev, values: CreateAnswers) =>
        values.featureKeys.includes('eslint') ? 'multiselect' : null,
      name: 'eslintExtensions',
      message: 'select ESLint extensions',
      choices: ESLINT_EXTENSIONS.map((extension) => ({
        value: extension,
        title: extension,
        selected: getExtensionSelected(FEATURE_KEY_MAP.eslint, extension),
      })),
    },
    {
      type: (_prev, values: CreateAnswers) =>
        values.featureKeys.includes('eslint') ? 'multiselect' : null,
      name: 'eslintOptions',
      message: 'select ESLint options',
      choices: ESLINT_OPTION_OPTIONS.map(({ key, displayName }) => ({
        value: key,
        title: displayName,
        selected: getOptionSelected(FEATURE_KEY_MAP.eslint, key),
      })),
    },
    {
      type: (_prev, values: CreateAnswers) =>
        values.featureKeys.includes('stylelint') ? 'multiselect' : null,
      name: 'stylelintExtensions',
      message: 'select Stylelint extensions',
      choices: STYLELINT_EXTENSIONS.map((extension) => ({
        value: extension,
        title: extension,
        selected: getExtensionSelected(FEATURE_KEY_MAP.stylelint, extension),
      })),
    },
    {
      type: (_prev, values: CreateAnswers) =>
        values.featureKeys.includes('stylelint') ? 'multiselect' : null,
      name: 'stylelintOptions',
      message: 'select Stylelint options',
      choices: STYLELINT_OPTION_OPTIONS.map(({ key, displayName }) => ({
        value: key,
        title: displayName,
        selected: getOptionSelected(FEATURE_KEY_MAP.stylelint, key),
      })),
    },
    {
      type: (_prev, values: CreateAnswers) =>
        values.featureKeys.includes('cspell') ? 'list' : null,
      name: 'cspellExtensions',
      message: 'select CSpell extensions',
      initial: getExtensionsInitial(FEATURE_KEY_MAP.cspell),
    },
    {
      type: (_prev, values: CreateAnswers) => {
        const { featureKeys } = values;
        // eslint-disable-next-line sonarjs/no-duplicate-string
        const hasFeature = featureKeys.includes('lint-staged');
        const availableOptions = LINT_STAGED_OPTION_OPTIONS.filter(({ key }) =>
          featureKeys.includes(key)
        );
        const hasAvailableOptions = availableOptions.length > 0;
        const isShowQuestion = hasFeature && hasAvailableOptions;
        return isShowQuestion ? 'multiselect' : null;
      },
      name: 'lintStagedOptions',
      message: 'select lint-staged options',
      choices: (_prev, values: CreateAnswers) => {
        const { featureKeys } = values;
        return LINT_STAGED_OPTION_OPTIONS.filter(({ key }) =>
          featureKeys.includes(key)
        ).map(({ key, displayName }) => ({
          value: key,
          title: displayName,
          selected: getOptionSelected(FEATURE_KEY_MAP['lint-staged'], key),
        }));
      },
    },
  ];

  return questions.map((question) => ({
    optionsPerPage: Number.POSITIVE_INFINITY,
    ...question,
  }));
}

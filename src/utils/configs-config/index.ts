import cleanDeep from 'clean-deep';
import { cosmiconfigSync } from 'cosmiconfig';

import { CONFIGS_CONFIG_FILE_NAME } from '@/constants/configs-config';
import type { ConfigsConfig, ValidConfigsConfig } from '@/types/configs-config';
import type { CreateAnswers } from '@/types/prompts';
import * as files from '@/utils/files';
import * as paths from '@/utils/paths';

import type { OutputConfigsConfigSyncOptions } from './types';

export function readConfigsConfigSync() {
  const explorerSync = cosmiconfigSync('configs');
  const result = explorerSync.search();

  return result?.config as ConfigsConfig;
}

export function outputConfigsConfigSync({
  filePath = paths.resolveCwd(CONFIGS_CONFIG_FILE_NAME),
  data,
}: OutputConfigsConfigSyncOptions) {
  return files.outputCjsFileSync({ filePath, data: { ...data } });
}

export function getValidConfigsConfig(
  configsConfig: ConfigsConfig
): ValidConfigsConfig {
  // @ts-ignore
  return cleanDeep(configsConfig, { cleanValues: [false] });
}

function arrayToBooleanValueObject<T extends string>(keys: T[]) {
  const result: { [key in T]?: boolean } = {};
  keys.forEach(key => {
    result[key] = true;
  });
  return result;
}

export function answersToConfigsConfig(answers: CreateAnswers) {
  const {
    featureKeys,
    prettierExtensions,
    tscExtensions,
    eslintExtensions,
    eslintOptions,
    stylelintExtensions,
    cspellExtensions,
  } = answers;
  const configsConfig: ConfigsConfig = {
    features: {},
  };
  // eslint-disable-next-line sonarjs/cognitive-complexity
  featureKeys.forEach(feature => {
    if (!configsConfig.features) {
      return;
    }

    if (feature === 'prettier' && prettierExtensions) {
      configsConfig.features[feature] = { extensions: prettierExtensions };
      return;
    }

    if (feature === 'tsc' && tscExtensions) {
      configsConfig.features[feature] = { extensions: tscExtensions };
      return;
    }

    if (feature === 'eslint') {
      if (eslintExtensions) {
        configsConfig.features[feature] = { extensions: eslintExtensions };
      }
      if (eslintOptions) {
        configsConfig.features[feature] = {
          ...configsConfig.features[feature],
          options: arrayToBooleanValueObject(eslintOptions),
        };
      }
      return;
    }

    if (feature === 'stylelint' && stylelintExtensions) {
      configsConfig.features[feature] = { extensions: stylelintExtensions };
      return;
    }

    if (feature === 'cspell' && cspellExtensions) {
      configsConfig.features[feature] = { extensions: cspellExtensions };
      return;
    }

    configsConfig.features[feature] = true;
  });

  return cleanDeep(configsConfig);
}

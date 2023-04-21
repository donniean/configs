import cleanDeep from 'clean-deep';
import { cosmiconfigSync } from 'cosmiconfig';
import { merge } from 'lodash-es';

import { CONFIGS_CONFIG_FILE_NAME } from '@/constants/configs-config';
import type {
  ConfigsConfig,
  NormalizedConfigsConfig,
} from '@/types/configs-config';
import * as files from '@/utils/files';
import * as paths from '@/utils/paths';

import type { OutputConfigsConfigSyncOptions } from './types';

export function defineConfig(configsConfig: ConfigsConfig): ConfigsConfig {
  return configsConfig;
}

export function readConfigsConfigSync() {
  const explorerSync = cosmiconfigSync('configs', {
    searchPlaces: [CONFIGS_CONFIG_FILE_NAME],
  });
  const result = explorerSync.search();
  return result?.config as ConfigsConfig | undefined;
}

export function outputConfigsConfigSync({
  filePath = paths.resolveCwd(CONFIGS_CONFIG_FILE_NAME),
  data,
}: OutputConfigsConfigSyncOptions) {
  const leadingComments = `/**
 * @type {import('@donniean/configs').ConfigsConfig}
 */`;
  // @ts-ignore
  return files.outputCjsFileSync({ filePath, data, leadingComments });
}

export function normalizeConfigsConfig(configsConfig: ConfigsConfig) {
  let finalConfigsConfig = { ...configsConfig };

  if (configsConfig.features?.['sort-package-json'] === true) {
    finalConfigsConfig = merge(null, finalConfigsConfig, {
      features: {
        'sort-package-json': {
          patterns: ['package.json'],
        },
      },
    });
  }

  // @ts-ignore
  finalConfigsConfig = cleanDeep(finalConfigsConfig, { cleanValues: [false] });

  if (configsConfig.features?.gitignore === true) {
    finalConfigsConfig = merge(null, finalConfigsConfig, {
      features: { gitignore: {} },
    });
  }

  return finalConfigsConfig as NormalizedConfigsConfig;
}

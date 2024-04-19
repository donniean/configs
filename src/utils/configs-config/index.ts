import cleanDeep from 'clean-deep';
import { cosmiconfig } from 'cosmiconfig';
import { merge } from 'lodash-es';
import sortObjectKeys from 'sort-object-keys';

import { CONFIGS_CONFIG_FILE_NAME } from '@/constants/configs-config';
import { FEATURE_KEYS } from '@/constants/features';
import type {
  ConfigsConfig,
  NormalizedConfigsConfig,
} from '@/types/configs-config';
import * as files from '@/utils/files';
import * as paths from '@/utils/paths';

import type { OutputConfigsConfigSyncOptions } from './types';

async function readConfigsConfig() {
  const explorerSync = cosmiconfig('configs');
  const result = await explorerSync.search();

  return result?.config as ConfigsConfig | undefined;
}

async function outputConfigsConfig({
  filePath = paths.resolveCwd(CONFIGS_CONFIG_FILE_NAME),
  data,
}: OutputConfigsConfigSyncOptions) {
  const content = `import { defineConfig } from '@donniean/configs';
export default defineConfig(${JSON.stringify(data)});
  `;
  await files.outputFile({ filePath, data: content, isFormat: true });
}

function normalizeConfigsConfig(configsConfig: ConfigsConfig) {
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

  // @ts-expect-error: no error
  finalConfigsConfig = cleanDeep(finalConfigsConfig, { cleanValues: [false] });

  if (configsConfig.features?.gitignore === true) {
    finalConfigsConfig = merge(null, finalConfigsConfig, {
      features: { gitignore: {} },
    });
  }

  return finalConfigsConfig as NormalizedConfigsConfig;
}

function sortConfigsConfig(configsConfig: ConfigsConfig) {
  const { features, ...rest } = configsConfig;

  if (!features) {
    return configsConfig;
  }

  const sortedFeatures = sortObjectKeys(features, FEATURE_KEYS);

  return { ...rest, features: sortedFeatures };
}

export {
  normalizeConfigsConfig,
  outputConfigsConfig,
  readConfigsConfig,
  sortConfigsConfig,
};

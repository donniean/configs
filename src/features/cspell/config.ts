import { CSPELL_IGNORE } from '@/constants/ignores';
import type { JsonObject } from '@/types/base';
import type { FeatureConfig, GetConfigOptions } from '@/types/feature-configs';
import { getIgnoreWithCustom } from '@/utils/features';

export function getConfig({
  normalizedConfigsConfig,
}: GetConfigOptions): FeatureConfig<JsonObject> {
  return {
    outputFileName: 'cspell.config.cjs',
    format: 'cjs',
    data: {
      version: '0.2',
      language: 'en',
      ignorePaths: getIgnoreWithCustom({
        featureKey: 'cspell',
        normalizedConfigsConfig,
        ignorePresets: CSPELL_IGNORE,
      }),
      dictionaries: [
        'user-apps',
        'user-brands',
        'user-docker',
        'user-files',
        'user-git',
        'user-nginx',
        'user-npm',
        'user-typescript',
      ],
      dictionaryDefinitions: [
        {
          name: 'user-apps',
          path: './dictionaries/apps.dic',
          addWords: true,
        },
        {
          name: 'user-brands',
          path: './dictionaries/brands.dic',
          addWords: true,
        },
        {
          name: 'user-docker',
          path: './dictionaries/docker.dic',
          addWords: true,
        },
        {
          name: 'user-files',
          path: './dictionaries/files.dic',
          addWords: true,
        },
        {
          name: 'user-git',
          path: './dictionaries/git.dic',
          addWords: true,
        },
        {
          name: 'user-nginx',
          path: './dictionaries/nginx.dic',
          addWords: true,
        },
        {
          name: 'user-npm',
          path: './dictionaries/npm.dic',
          addWords: true,
        },
        {
          name: 'user-typescript',
          path: './dictionaries/typescript.dic',
          addWords: true,
        },
      ],
    },
  };
}

import { LINT_IGNORE } from '@/constants/ignore';
import type { JsonObject } from '@/types/base';
import type { FeatureConfig, GetConfigOptions } from '@/types/feature-configs';
import { getIgnoreWithCustom } from '@/utils/features';

const IGNORE = [
  '**/*.svg',
  '.git/',
  '.idea/',
  '.vscode/',
  '.*ignore',
  '*.tsbuildinfo',
  '.gitattributes',
  '.htmlhintrc',
  'Dockerfile',
  'package.json',
  'package-lock.json',
  'pnpm-lock.yaml',
  'CHANGELOG.md',
];

export function getConfig({
  validConfigsConfig,
}: GetConfigOptions): FeatureConfig<JsonObject> {
  return {
    outputFileName: 'cspell.config.cjs',
    format: 'cjs',
    data: {
      version: '0.2',
      language: 'en',
      ignorePaths: getIgnoreWithCustom({
        featureKey: 'cspell',
        validConfigsConfig,
        ignore: [...LINT_IGNORE, ...IGNORE],
      }),
      dictionaries: [
        'user-apps',
        'user-brands',
        'user-custom',
        'user-files',
        'user-npm',
      ],
      dictionaryDefinitions: [
        { name: 'user-apps', path: './dictionaries/apps.dic', addWords: true },
        {
          name: 'user-brands',
          path: './dictionaries/brands.dic',
          addWords: true,
        },
        {
          name: 'user-custom',
          path: './dictionaries/custom.dic',
          addWords: true,
        },
        {
          name: 'user-files',
          path: './dictionaries/files.dic',
          addWords: true,
        },
        { name: 'user-npm', path: './dictionaries/npm.dic', addWords: true },
      ],
    },
  };
}

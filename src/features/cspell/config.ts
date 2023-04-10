import { LINT_IGNORE } from '@/constants/ignore';
import type { JsonObject } from '@/types/base';
import type { FeatureConfig } from '@/types/feature-configs';

export function getConfig(): FeatureConfig<JsonObject> {
  return {
    outputFileName: 'cspell.config.cjs',
    format: 'cjs',
    data: {
      version: '0.2',
      language: 'en',
      ignorePaths: [
        ...LINT_IGNORE,
        '**/.idea/**',
        '**/.vscode/**',
        '**/package.json',
        '**/package-lock.json',
        '**/pnpm-lock.yaml',
        '**/.*ignore',
        '**/.gitattributes',
        '**/.htmlhintrc',
        '**/Dockerfile',
      ],
      dictionaries: [
        'user-apps',
        'user-custom',
        'user-files',
        'user-npm',
        'user-webstorm',
      ],
      dictionaryDefinitions: [
        { name: 'user-apps', path: './dictionaries/apps.dic', addWords: true },
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

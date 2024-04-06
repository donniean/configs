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
      words: [
        // apps
        'webstorm',
        'wechat',
        // brands
        'Vercel',
        // Docker
        'Buildx',
        // files
        'browserslistrc',
        'commitlintrc',
        'configsrc',
        'htmlhintrc',
        'huskyrc',
        'lintstagedrc',
        'markdownlintignore',
        'stylelintignore',
        'stylelintrc',
        // Git
        'signoff',
        // nginx
        'proxied',
        // npm
        'clsx',
        'commitlint',
        'corepack',
        'cssnano',
        'deepmerge',
        'depcheck',
        'donniean',
        'htmlhint',
        'immer',
        'markdownlint',
        'sonarjs',
        'stylelint',
        'svgr',
        'tailwindcss',
        'tanstack',
        'vitest',
        'zustand',
        // TypeScript
        'classname',
      ],
    },
  };
}

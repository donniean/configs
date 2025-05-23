import type { ConfigsConfig } from '@/types/configs-config';

export const CONFIGS_CONFIG_FILE_NAME = 'configs.config.mjs';

export const DEFAULT_CONFIGS_CONFIG = {
  features: {
    gitignore: true,
    gitattributes: true,
    editorconfig: true,
    prettier: {
      patterns: ['**'],
    },
    autocorrect: true,
    tsc: {
      patterns: ['**/*.{ts,tsx}'],
    },
    eslint: {
      patterns: ['**/*.{js,mjs,cjs,ts,tsx}'],
      vitestPatterns: ['**/*.test.ts'],
    },
    stylelint: {
      patterns: ['**/*.css'],
      cssModules: true,
    },
    htmlhint: {
      patterns: ['**/*.html'],
    },
    markdownlint: {
      patterns: ['**/*.md'],
    },
    cspell: {
      patterns: ['**'],
    },
    'sort-package-json': true,
    vitest: true,
    commitlint: true,
    commitizen: true,
    'lint-staged': true,
    husky: true,
    'npm-check-updates': true,
    knip: true,
  },
} as const satisfies ConfigsConfig;

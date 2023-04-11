import { without } from 'lodash';

import type { ConfigsConfig } from '@/types/configs-config';

import {
  ESLINT_EXTENSIONS,
  PRETTIER_EXTENSIONS,
  STYLELINT_EXTENSIONS,
  TSC_EXTENSIONS,
} from './extensions';

export const CONFIGS_CONFIG_FILE_NAME = 'configs.config.cjs';

export const DEFAULT_CONFIGS_CONFIG: ConfigsConfig = {
  features: {
    gitignore: true,
    gitattributes: true,
    editorconfig: true,
    prettier: {
      extensions: without(
        PRETTIER_EXTENSIONS,
        'jsx',
        'mjs',
        'vue',
        'hbs',
        'handlebars',
        'less',
        'mdx',
        'yaml',
        'yml'
      ),
    },
    tsc: {
      extensions: TSC_EXTENSIONS,
    },
    eslint: {
      extensions: without(ESLINT_EXTENSIONS, 'jsx', 'mjs'),
      options: {
        node: false,
      },
    },
    stylelint: {
      extensions: without(STYLELINT_EXTENSIONS, 'js', 'jsx'),
      options: {
        scss: true,
        'css-in-js': true,
      },
    },
    htmlhint: false,
    markdownlint: true,
    cspell: {
      extensions: ['**'],
    },
    commitlint: true,
    commitizen: true,
    'sort-package-json': true,
    'lint-staged': true,
    husky: true,
  },
};

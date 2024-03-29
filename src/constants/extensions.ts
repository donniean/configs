import type {
  ESLintExtension,
  StylelintExtension,
  TscExtension,
} from '@/types/extensions';

export const TSC_EXTENSIONS: TscExtension[] = ['ts', 'tsx'];

export const ESLINT_EXTENSIONS: ESLintExtension[] = [
  'js',
  'jsx',
  'mjs',
  'cjs',
  'ts',
  'tsx',
];

export const STYLELINT_EXTENSIONS: StylelintExtension[] = [
  'css',
  'scss',
  'js',
  'jsx',
  'ts',
  'tsx',
];

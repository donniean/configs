import type {
  ESLintExtension,
  PrettierExtension,
  StylelintExtension,
  TscExtension,
} from '@/types/extensions';

export const PRETTIER_EXTENSIONS: PrettierExtension[] = [
  'js',
  'jsx',
  'ts',
  'tsx',
  'mjs',
  'cjs',
  'json',
  'html',
  'vue',
  'hbs',
  'handlebars',
  'css',
  'less',
  'scss',
  'md',
  'mdx',
  'yaml',
  'yml',
];

export const TSC_EXTENSIONS: TscExtension[] = ['ts', 'tsx'];

export const ESLINT_EXTENSIONS: ESLintExtension[] = [
  'js',
  'jsx',
  'ts',
  'tsx',
  'mjs',
  'cjs',
];

export const STYLELINT_EXTENSIONS: StylelintExtension[] = [
  'css',
  'scss',
  'js',
  'jsx',
  'ts',
  'tsx',
];

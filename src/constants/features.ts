import type {
  ESLintOption,
  FeatureKey,
  Option,
  StylelintOption,
} from '@/types/features';

export const FEATURE_KEY_MAP = {
  gitignore: 'gitignore',
  gitattributes: 'gitattributes',
  editorconfig: 'editorconfig',
  prettier: 'prettier',
  tsc: 'tsc',
  eslint: 'eslint',
  stylelint: 'stylelint',
  htmlhint: 'htmlhint',
  markdownlint: 'markdownlint',
  cspell: 'cspell',
  commitlint: 'commitlint',
  commitizen: 'commitizen',
  'sort-package-json': 'sort-package-json',
  // eslint-disable-next-line sonarjs/no-duplicate-string
  'lint-staged': 'lint-staged',
  husky: 'husky',
} as const;

export const FEATURE_OPTIONS: Option<FeatureKey>[] = [
  { key: FEATURE_KEY_MAP.gitignore, displayName: 'gitignore' },
  { key: FEATURE_KEY_MAP.gitattributes, displayName: 'gitattributes' },
  { key: FEATURE_KEY_MAP.editorconfig, displayName: 'EditorConfig' },
  { key: FEATURE_KEY_MAP.prettier, displayName: 'Prettier' },
  { key: FEATURE_KEY_MAP.tsc, displayName: 'tsc' },
  { key: FEATURE_KEY_MAP.eslint, displayName: 'ESLint' },
  { key: FEATURE_KEY_MAP.stylelint, displayName: 'Stylelint' },
  { key: FEATURE_KEY_MAP.htmlhint, displayName: 'HTMLHint' },
  { key: FEATURE_KEY_MAP.markdownlint, displayName: 'markdownlint' },
  { key: FEATURE_KEY_MAP.cspell, displayName: 'CSpell' },
  { key: FEATURE_KEY_MAP.commitlint, displayName: 'commitlint' },
  { key: FEATURE_KEY_MAP.commitizen, displayName: 'Commitizen' },
  {
    key: FEATURE_KEY_MAP['sort-package-json'],
    displayName: 'Sort Package.json',
  },
  { key: FEATURE_KEY_MAP['lint-staged'], displayName: 'lint-staged' },
  { key: FEATURE_KEY_MAP.husky, displayName: 'Husky' },
];

export const ESLINT_OPTION_OPTIONS: Option<ESLintOption>[] = [
  { key: 'node', displayName: 'Node.js' },
];

export const STYLELINT_OPTION_OPTIONS: Option<StylelintOption>[] = [
  { key: 'scss', displayName: 'SCSS' },
  { key: 'css-in-js', displayName: 'CSS-in-JS' },
];

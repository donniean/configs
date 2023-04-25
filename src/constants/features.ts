import type { ESLintPlugin, FeatureKey, Option } from '@/types/features';

const FEATURE_KEY_MAP = {
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
  // eslint-disable-next-line sonarjs/no-duplicate-string
  'sort-package-json': 'sort-package-json',
  commitlint: 'commitlint',
  commitizen: 'commitizen',
  // eslint-disable-next-line sonarjs/no-duplicate-string
  'lint-staged': 'lint-staged',
  husky: 'husky',
} as const;

const FEATURE_KEYS = [
  FEATURE_KEY_MAP.gitignore,
  FEATURE_KEY_MAP.gitattributes,
  FEATURE_KEY_MAP.editorconfig,
  FEATURE_KEY_MAP.prettier,
  FEATURE_KEY_MAP.tsc,
  FEATURE_KEY_MAP.eslint,
  FEATURE_KEY_MAP.stylelint,
  FEATURE_KEY_MAP.htmlhint,
  FEATURE_KEY_MAP.markdownlint,
  FEATURE_KEY_MAP.cspell,
  FEATURE_KEY_MAP['sort-package-json'],
  FEATURE_KEY_MAP.commitlint,
  FEATURE_KEY_MAP.commitizen,
  FEATURE_KEY_MAP['lint-staged'],
  FEATURE_KEY_MAP.husky,
] as const;

const FEATURE_OPTIONS: Option<FeatureKey>[] = [
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
  {
    key: FEATURE_KEY_MAP['sort-package-json'],
    displayName: 'Sort Package.json',
  },
  { key: FEATURE_KEY_MAP.commitlint, displayName: 'commitlint' },
  { key: FEATURE_KEY_MAP.commitizen, displayName: 'Commitizen' },
  { key: FEATURE_KEY_MAP['lint-staged'], displayName: 'lint-staged' },
  { key: FEATURE_KEY_MAP.husky, displayName: 'husky' },
];

const ESLINT_PLUGIN_OPTIONS: Option<ESLintPlugin>[] = [
  { key: 'node', displayName: 'Node.js' },
];

export {
  ESLINT_PLUGIN_OPTIONS,
  FEATURE_KEY_MAP,
  FEATURE_KEYS,
  FEATURE_OPTIONS,
};

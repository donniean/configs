import type { FeatureKey, HasLintFeatureKey, Option } from '@/types/features';

const FEATURE_KEY_MAP = {
  gitignore: 'gitignore',
  gitattributes: 'gitattributes',
  editorconfig: 'editorconfig',
  prettier: 'prettier',
  autocorrect: 'autocorrect',
  tsc: 'tsc',
  eslint: 'eslint',
  stylelint: 'stylelint',
  htmlhint: 'htmlhint',
  markdownlint: 'markdownlint',
  cspell: 'cspell',

  'sort-package-json': 'sort-package-json',
  vitest: 'vitest',
  commitlint: 'commitlint',
  commitizen: 'commitizen',

  'lint-staged': 'lint-staged',
  husky: 'husky',

  'npm-check-updates': 'npm-check-updates',
  knip: 'knip',
} as const;

const FEATURE_KEYS = [
  FEATURE_KEY_MAP.gitignore,
  FEATURE_KEY_MAP.gitattributes,
  FEATURE_KEY_MAP.editorconfig,
  FEATURE_KEY_MAP.prettier,
  FEATURE_KEY_MAP.autocorrect,
  FEATURE_KEY_MAP.tsc,
  FEATURE_KEY_MAP.eslint,
  FEATURE_KEY_MAP.stylelint,
  FEATURE_KEY_MAP.htmlhint,
  FEATURE_KEY_MAP.markdownlint,
  FEATURE_KEY_MAP.cspell,
  FEATURE_KEY_MAP['sort-package-json'],
  FEATURE_KEY_MAP.vitest,
  FEATURE_KEY_MAP.commitlint,
  FEATURE_KEY_MAP.commitizen,
  FEATURE_KEY_MAP['lint-staged'],
  FEATURE_KEY_MAP.husky,
  FEATURE_KEY_MAP['npm-check-updates'],
  FEATURE_KEY_MAP.knip,
] as const satisfies FeatureKey[];

const HAS_LINTS_FEATURE_KEYS = [
  'prettier',
  'autocorrect',
  'tsc',
  'eslint',
  'stylelint',
  'htmlhint',
  'markdownlint',
  'cspell',
  'sort-package-json',
] as const satisfies HasLintFeatureKey[];

const FEATURE_OPTIONS: Option<FeatureKey>[] = [
  { key: FEATURE_KEY_MAP.gitignore, displayName: 'gitignore' },
  { key: FEATURE_KEY_MAP.gitattributes, displayName: 'gitattributes' },
  { key: FEATURE_KEY_MAP.editorconfig, displayName: 'EditorConfig' },
  { key: FEATURE_KEY_MAP.prettier, displayName: 'Prettier' },
  { key: FEATURE_KEY_MAP.autocorrect, displayName: 'AutoCorrect' },
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
  { key: FEATURE_KEY_MAP.vitest, displayName: 'Vitest' },
  { key: FEATURE_KEY_MAP.commitlint, displayName: 'commitlint' },
  { key: FEATURE_KEY_MAP.commitizen, displayName: 'Commitizen' },
  { key: FEATURE_KEY_MAP['lint-staged'], displayName: 'lint-staged' },
  { key: FEATURE_KEY_MAP.husky, displayName: 'husky' },

  {
    key: FEATURE_KEY_MAP['npm-check-updates'],
    displayName: 'npm-check-updates',
  },
  { key: FEATURE_KEY_MAP.knip, displayName: 'Knip' },
];

export { FEATURE_KEYS, FEATURE_OPTIONS, HAS_LINTS_FEATURE_KEYS };

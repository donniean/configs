const LINTER_IGNORE = [
  '.git/',
  '.history/',
  '**/node_modules/',
  '**/coverage/',
  '**/dist/',
  '**/.next/',
  '**/*.min.*',
];

const CHANGELOG_IGNORE = ['**/CHANGELOG.md'];

export const CSPELL_IGNORE = [
  ...LINTER_IGNORE,
  '.idea/',
  '.vscode/',
  '.*ignore',
  '.gitattributes',
  '**/.htmlhintrc',
  '**/*.tsbuildinfo',
  '**/*.svg',
  '**/package.json',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/Dockerfile',
  ...CHANGELOG_IGNORE,
];

export const MARKDOWNLINT_IGNORE = [
  ...LINTER_IGNORE,
  ...CHANGELOG_IGNORE,
  '.changeset/',
];

export const PRETTIER_IGNORE = [...LINTER_IGNORE, '**/*.tsbuildinfo'];

export const AUTOCORRECT_IGNORE = [...LINTER_IGNORE, ...CHANGELOG_IGNORE];

export const STYLELINT_IGNORE = [...LINTER_IGNORE];

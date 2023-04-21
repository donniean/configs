const LINTER_IGNORE = ['.git/', '.history/', 'node_modules/', 'dist/'];

export const CSPELL_IGNORE = [
  ...LINTER_IGNORE,
  '.idea/',
  '.vscode/',
  '**/*.svg',
  '.*ignore',
  '*.tsbuildinfo',
  '.gitattributes',
  '.htmlhintrc',
  'package.json',
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml',
  'CHANGELOG.md',
  'Dockerfile',
];

export const ESLINT_IGNORE = [...LINTER_IGNORE];

export const MARKDOWNLINT_IGNORE = [...LINTER_IGNORE, 'CHANGELOG.md'];

export const PRETTIER_IGNORE = [...LINTER_IGNORE, '*.tsbuildinfo'];

export const STYLELINT_IGNORE = [...LINTER_IGNORE];

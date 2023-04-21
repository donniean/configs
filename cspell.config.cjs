module.exports = {
  version: '0.2',
  language: 'en',
  ignorePaths: [
    'node_modules/',
    'build/',
    'dist/',
    '**/*.min.*',
    '**/*.svg',
    '.git/',
    '.idea/',
    '.vscode/',
    '.*ignore',
    '*.tsbuildinfo',
    '.gitattributes',
    '.htmlhintrc',
    'Dockerfile',
    'package.json',
    'package-lock.json',
    'pnpm-lock.yaml',
    'CHANGELOG.md',
    '**/assets/**/gitattributes',
    '**/assets/**/gitignore.ignore',
  ],
  dictionaries: [
    'user-apps',
    'user-brands',
    'user-custom',
    'user-files',
    'user-npm',
  ],
  dictionaryDefinitions: [
    {
      name: 'user-apps',
      path: './dictionaries/apps.dic',
      addWords: true,
    },
    {
      name: 'user-brands',
      path: './dictionaries/brands.dic',
      addWords: true,
    },
    {
      name: 'user-custom',
      path: './dictionaries/custom.dic',
      addWords: true,
    },
    {
      name: 'user-files',
      path: './dictionaries/files.dic',
      addWords: true,
    },
    {
      name: 'user-npm',
      path: './dictionaries/npm.dic',
      addWords: true,
    },
  ],
};

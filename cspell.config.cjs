module.exports = {
  version: '0.2',
  language: 'en',
  ignorePaths: [
    '**/node_modules/',
    '**/lib/',
    '**/build/',
    '**/dist/',
    '**/*.min.*',
    '**/.idea/**',
    '**/.vscode/**',
    '**/package.json',
    '**/package-lock.json',
    '**/pnpm-lock.yaml',
    '**/.*ignore',
    '**/.gitattributes',
    '**/.htmlhintrc',
    '**/Dockerfile',
  ],
  dictionaries: ['user-apps', 'user-custom', 'user-files', 'user-npm'],
  dictionaryDefinitions: [
    {
      name: 'user-apps',
      path: './dictionaries/apps.dic',
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

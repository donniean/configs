module.exports = {
  version: '0.2',
  language: 'en',
  ignorePaths: [
    '**/.idea/**',
    '**/.vscode/**',
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/libs/**',
    '**/*.min.*',
    '**/.gitattributes',
    '**/.gitignore',
    '**/.htmlhintrc',
    '**/package.json',
    '**/package-lock.json',
    '**/Dockerfile',
    '**/.dockerignore',
  ],
  dictionaries: ['custom'],
  dictionaryDefinitions: [
    { name: 'custom', path: './dictionaries/custom.dic' },
  ],
};

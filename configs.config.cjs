module.exports = {
  features: {
    gitignore: true,
    gitattributes: true,
    editorconfig: true,
    prettier: {
      extensions: ['js', 'ts', 'cjs', 'json', 'md', 'yaml', 'yml'],
    },
    tsc: {
      extensions: ['ts'],
    },
    markdownlint: true,
    cspell: {
      extensions: ['**'],
    },
    commitlint: true,
    commitizen: true,
    'sort-package-json': true,
    'lint-staged': true,
    husky: true,
  },
};

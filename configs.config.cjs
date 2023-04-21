/**
 * @type {import('@donniean/configs').ConfigsConfig}
 */
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
      customIgnore: [
        '**/assets/**/gitattributes',
        '**/assets/**/gitignore.ignore',
      ],
    },
    commitlint: true,
    commitizen: true,
    'sort-package-json': true,
    'lint-staged': true,
    husky: true,
  },
};

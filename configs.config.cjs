module.exports = {
  features: {
    gitignore: true,
    gitattributes: true,
    editorconfig: true,
    prettier: {
      patterns: ['**'],
    },
    autocorrect: true,
    tsc: {
      patterns: ['**/*.ts'],
    },
    eslint: {
      patterns: ['**/*.{js,mjs,cjs,ts}'],
      nodePatterns: ['**'],
      vitestPatterns: ['**/*.test.ts'],
    },
    markdownlint: {
      patterns: ['**/*.md'],
    },
    cspell: {
      patterns: ['**'],
      ignorePatterns: [
        '**/assets/**/gitattributes.gitattributes',
        '**/assets/**/gitignore.ignore',
      ],
    },
    'sort-package-json': true,
    vitest: true,
    commitlint: true,
    commitizen: true,
    'lint-staged': true,
    husky: true,
  },
};

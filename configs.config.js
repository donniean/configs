module.exports = {
  features: {
    gitignore: true,
    prettier: {
      extensions: ['js', 'ts', 'tsx', 'json', 'html', 'css', 'scss', 'md'],
    },
    tsc: {
      extensions: ['ts', 'tsx'],
    },
    eslint: {
      extensions: ['js', 'jsx', 'ts', 'tsx', 'mjs', 'cjs'],
      options: {
        node: true,
      },
    },
    stylelint: {
      extensions: ['css', 'scss', 'js', 'jsx', 'ts', 'tsx'],
    },
    commitlint: true,
    commitizen: true,
  },
};

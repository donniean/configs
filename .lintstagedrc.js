module.exports = {
  '*.{js,json,html,md,yaml}': 'prettier --write',
  '*.{js,html}': 'eslint --fix',
  '*.*': 'cspell',
};

module.exports = {
  '*.{js,jsx,ts,tsx,mjs,cjs,json,html,vue,hbs,handlebars,css,less,scss,md,mdx,yaml,yml}':
    'prettier --write',
  '*.{js,jsx,ts,tsx,mjs,cjs,vue}': 'eslint --fix',
  '*.{ts,tsx}': 'tsc --noEmit',
  '*.{css,less,scss,js,jsx,ts,tsx,html,vue}': 'stylelint --fix',
  '*.html': 'htmlhint',
  '**': 'cspell --no-must-find-files',
};

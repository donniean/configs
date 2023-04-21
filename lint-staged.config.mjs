export default {
  'package.json': 'sort-package-json',
  '*': [
    'prettier --check --ignore-unknown',
    'cspell lint --no-progress --relative --no-must-find-files --dot --gitignore',
  ],
  '*.ts': 'bash -c tsc --noEmit',
  '*.{js,mjs,cjs,ts}': 'eslint --fix',
  '*.md': 'markdownlint  --dot --fix',
};

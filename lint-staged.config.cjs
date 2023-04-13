module.exports = {
  'package.json': 'sort-package-json',
  '*.{js,ts,cjs,json,md,yaml,yml}': 'prettier --write',
  '*.ts': 'bash -c tsc --noEmit',
  '*.md': 'markdownlint --fix',
  '**': 'cspell --no-must-find-files',
};

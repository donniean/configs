module.exports = {
  '*.{js,ts,json,md}': 'prettier --write',
  '*.{js,ts}': 'eslint --fix',
  '*.ts': () => 'tsc --noEmit',
  '**': 'cspell --no-must-find-files',
};

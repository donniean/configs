module.exports = {
  '*.{js,ts,json,md}': 'prettier --write',
  '*.{js,ts}': 'eslint --fix',
  '*.ts': 'bash -c tsc --noEmit',
  // '**': 'cspell --no-must-find-files',
};

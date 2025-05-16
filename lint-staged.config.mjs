export default {
  'package.json': 'sort-package-json',
  '*': [
    'prettier --write --ignore-unknown',
    'autocorrect --fix',
    'cspell lint --no-progress --relative --no-must-find-files --dot --gitignore',
  ],
  '*.ts': [
    'bash -c tsc --noEmit',
    'vitest related --run',
    'npm run docs',
    `git add ${globalThis.process.env.npm_package_config_docsFilePath}`,
  ],
  '*.{js,mjs,cjs,ts}': 'eslint --fix',
  '*.md': 'markdownlint --dot --fix',
};

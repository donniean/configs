/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  'package.json': 'sort-package-json',
  '*': [
    'prettier --write --ignore-unknown',
    'autocorrect --fix',
    'cspell lint --no-progress --no-must-find-files --dot --gitignore',
  ],
  '*.ts': [
    'bash -c tsc --noEmit',
    'vitest related --run',
    'npm run docs',
    `git add ${globalThis.process.env.npm_package_config_docsFilePath}`,
  ],
  '*.{js,mjs,cjs,ts}': 'eslint --fix --max-warnings 0',
  '*.md': 'markdownlint --dot --fix',
};

import * as autocorrect from './autocorrect';
import * as commitizen from './commitizen';
import * as commitlint from './commitlint';
import * as cspell from './cspell';
import * as editorconfig from './editorconfig';
import * as eslint from './eslint';
import * as gitattributes from './gitattributes';
import * as gitignore from './gitignore';
import * as htmlhint from './htmlhint';
import * as husky from './husky';
import * as knip from './knip';
import * as lintStaged from './lint-staged';
import * as markdownlint from './markdownlint';
import * as npmCheckUpdates from './npm-check-updates';
import * as prettier from './prettier';
import * as sortPackageJson from './sort-package-json';
import * as stylelint from './stylelint';
import * as tsc from './tsc';
import * as vitest from './vitest';

export default {
  commitizen,
  commitlint,
  cspell,
  knip,
  'npm-check-updates': npmCheckUpdates,
  editorconfig,
  autocorrect,
  eslint,
  gitattributes,
  gitignore,
  htmlhint,
  husky,
  'lint-staged': lintStaged,
  markdownlint,
  prettier,
  'sort-package-json': sortPackageJson,
  stylelint,
  tsc,
  vitest,
};

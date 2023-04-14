import * as commitizen from './commitizen';
import * as commitlint from './commitlint';
import * as cspell from './cspell';
import * as editorconfig from './editorconfig';
import * as eslint from './eslint';
import * as gitattributes from './gitattributes';
import * as gitignore from './gitignore';
import * as htmlhint from './htmlhint';
import * as husky from './husky';
import * as lintStaged from './lint-staged';
import * as markdownlint from './markdownlint';
import * as prettier from './prettier';
import * as sortPackageJson from './sort-package-json';
import * as stylelint from './stylelint';
import * as tsc from './tsc';

export default {
  commitizen,
  commitlint,
  cspell,
  editorconfig,
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
};

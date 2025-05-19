import { CONFIG as autocorrect } from './autocorrect';
import { CONFIG as commitlint } from './commitlint';
import { CONFIG as cspell } from './cspell';
import { CONFIG as editorconfig } from './editorconfig';
import { CONFIG as eslint } from './eslint';
import { CONFIG as gitattributes } from './gitattributes';
import { CONFIG as gitignore } from './gitignore';
import { CONFIG as htmlhint } from './htmlhint';
import { CONFIG as husky } from './husky';
import { CONFIG as knip } from './knip';
import { CONFIG as lintStaged } from './lint-staged';
import { CONFIG as markdownlint } from './markdownlint';
import { CONFIG as npmCheckUpdates } from './npm-check-updates';
import { CONFIG as prettier } from './prettier';
import { CONFIG as sortPackageJson } from './sort-package-json';
import { CONFIG as stylelint } from './stylelint';
import { CONFIG as tsc } from './tsc';

export const CONFIGS = [
  autocorrect,
  cspell,
  editorconfig,
  eslint,
  gitattributes,
  gitignore,
  htmlhint,
  knip,
  markdownlint,
  npmCheckUpdates,
  prettier,
  sortPackageJson,
  stylelint,
  tsc,
  // husky
  husky,
  commitlint,
  lintStaged,
] as const;

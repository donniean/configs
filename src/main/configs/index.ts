import { CONFIG as autocorrect } from './autocorrect';
import { CONFIG as commitizen } from './commitizen';
import { CONFIG as commitlint } from './commitlint';
import { CONFIG as cspell } from './cspell';
import { CONFIG as editorconfig } from './editorconfig';
import { CONFIG as eslint } from './eslint';
import { CONFIG as gitattributes } from './gitattributes';
import { CONFIG as gitignore } from './gitignore';

export const CONFIGS = [
  autocorrect,
  commitizen,
  commitlint,
  cspell,
  editorconfig,
  eslint,
  gitattributes,
  gitignore,
] as const;

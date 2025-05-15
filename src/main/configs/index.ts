import { CONFIG as autocorrect } from './autocorrect';
import { CONFIG as commitizen } from './commitizen';
import { CONFIG as commitlint } from './commitlint';
import { CONFIG as cspell } from './cspell';
import { CONFIG as editorconfig } from './editorconfig';
import { CONFIG as eslint } from './eslint';

export const CONFIGS = [
  autocorrect,
  commitizen,
  commitlint,
  cspell,
  editorconfig,
  eslint,
] as const;

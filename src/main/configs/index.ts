import { CONFIG as autocorrect } from './autocorrect';
import { CONFIG as commitizen } from './commitizen';
import { CONFIG as commitlint } from './commitlint';
import { CONFIG as cspell } from './cspell';
import { CONFIG as editorconfig } from './editorconfig';

export const CONFIGS = [
  autocorrect,
  commitizen,
  commitlint,
  cspell,
  editorconfig,
] as const;

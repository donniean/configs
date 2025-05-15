import { CONFIG as autocorrect } from './configs/autocorrect';
import { CONFIG as commitizen } from './configs/commitizen';
import { CONFIG as commitlint } from './configs/commitlint';
import { CONFIG as cspell } from './configs/cspell';

export const CONFIGS = [autocorrect, commitizen, commitlint, cspell] as const;

export const MARKDOWN_FILE_NAME = 'configs.md' as const;

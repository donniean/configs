import type { CopySyncOptions as FsCopySyncOptions } from 'fs-extra';

import type { JsonObjectOrArray } from '@/types/base';

export interface ReadFileSyncOptions {
  filePath: string;
}

export interface OutputFileSyncOptions {
  filePath: string;
  data: string;
  isTrim?: boolean;
  isInsertNewLine?: boolean;
  isFormat?: boolean;
}

export interface ReadJsonFileSyncOptions {
  filePath: string;
}

export interface OutputJsonFileSyncOptions {
  filePath: string;
  data: JsonObjectOrArray;
}

export type MergeJsonFileSyncOptions = OutputJsonFileSyncOptions;

export interface OutputCjsFileSyncOptions {
  filePath: string;
  data: JsonObjectOrArray;
  isFormat?: boolean;
}

export type OutputEsmFileSyncOptions = OutputCjsFileSyncOptions;

export type OutputFormatFileSyncOptions =
  | {
      filePath: string;
      data: JsonObjectOrArray;
      format: 'json' | 'cjs' | 'esm';
    }
  | {
      filePath: string;
      data: string;
      format?: 'text';
    };

export interface CopySyncOptions extends FsCopySyncOptions {
  src: string;
  dest: string;
}

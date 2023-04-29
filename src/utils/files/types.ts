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
  leadingComments?: string;
  isFormat?: boolean;
}

export type OutputEsmFileSyncOptions = OutputCjsFileSyncOptions;

export type OutputFormatFileSyncOptions =
  | {
      filePath: string;
      format: 'esm' | 'cjs';
      data: JsonObjectOrArray;
      leadingComments?: string;
    }
  | {
      filePath: string;
      format: 'json';
      data: JsonObjectOrArray;
      leadingComments?: undefined;
    }
  | {
      filePath: string;
      format: 'text';
      data: string;
      leadingComments?: undefined;
    };

export interface CopySyncOptions extends FsCopySyncOptions {
  src: string;
  dest: string;
}

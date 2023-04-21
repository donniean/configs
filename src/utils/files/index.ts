import fs from 'fs-extra';
import { merge } from 'lodash-es';
import prettier from 'prettier';

import type { JsonObjectOrArray } from '@/types/base';
import logger from '@/utils/logger';

import type {
  CopySyncOptions,
  MergeJsonFileSyncOptions,
  OutputCjsFileSyncOptions,
  OutputEsmFileSyncOptions,
  OutputFileSyncOptions,
  OutputFormatFileSyncOptions,
  OutputJsonFileSyncOptions,
  ReadFileSyncOptions,
  ReadJsonFileSyncOptions,
} from './types';

function format(source: string) {
  return prettier.format(source, {
    singleQuote: true,
    parser: 'babel',
  });
}

export function readFileSync({ filePath }: ReadFileSyncOptions) {
  return fs.readFileSync(filePath, { encoding: 'utf8' });
}

export function outputFileSync({
  filePath,
  data,
  isTrim = true,
  isInsertNewLine = true,
  isFormat = false,
}: OutputFileSyncOptions) {
  let content = isTrim ? data.trim() : data;
  content = isInsertNewLine ? `${content}\n` : content;
  content = isFormat ? format(content) : content;
  fs.outputFileSync(filePath, content, { encoding: 'utf8' });
  logger.info(`output ${filePath}`);
}

export function readJsonFileSync<T extends JsonObjectOrArray>({
  filePath,
}: ReadJsonFileSyncOptions): T | null {
  return fs.readJsonSync(filePath, {
    encoding: 'utf8',
    throws: false,
  }) as T | null;
}

export function outputJsonFileSync({
  filePath,
  data,
}: OutputJsonFileSyncOptions) {
  fs.outputJsonSync(filePath, data, {
    encoding: 'utf8',
    spaces: 2,
    finalEOL: true,
  });
  logger.info(`output ${filePath}`);
}

export function mergeJsonFileSync({
  filePath,
  data,
}: MergeJsonFileSyncOptions) {
  const prevData = readJsonFileSync({ filePath });
  const finalData = merge({}, prevData, data);
  outputJsonFileSync({ filePath, data: finalData });
}

export function outputCjsFileSync({
  filePath,
  data,
  leadingComments = '',
  isFormat = true,
}: OutputCjsFileSyncOptions) {
  const content = `${leadingComments}
  module.exports = ${JSON.stringify(data, null, 2)};`;
  outputFileSync({
    filePath,
    data: content,
    isFormat,
  });
}

function outputEsmFileSync({
  filePath,
  data,
  leadingComments = '',
  isFormat = true,
}: OutputEsmFileSyncOptions) {
  const content = `${leadingComments}
  export default ${JSON.stringify(data, null, 2)};`;
  outputFileSync({
    filePath,
    data: content,
    isFormat,
  });
}

export function outputFormatFileSync({
  filePath,
  data,
  format: formatType,
}: OutputFormatFileSyncOptions) {
  switch (formatType) {
    case 'json': {
      outputJsonFileSync({ filePath, data });
      break;
    }
    case 'cjs': {
      outputCjsFileSync({ filePath, data });
      break;
    }
    case 'esm': {
      outputEsmFileSync({ filePath, data });
      break;
    }
    case 'text': {
      outputFileSync({ filePath, data });
      break;
    }
    default: {
      outputFileSync({ filePath, data });
      break;
    }
  }
}

export function copySync({ src, dest, ...rest }: CopySyncOptions) {
  fs.copySync(src, dest, rest);
  logger.info(`copy ${src} to ${dest}`);
}

import fs from 'fs-extra';
import { merge } from 'lodash-es';
import prettier from 'prettier';

import type { JsonObjectOrArray } from '@/types/base';
import logger from '@/utils/logger';
import { stringifyJavaScript } from '@/utils/misc';

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

function readFileSync({ filePath }: ReadFileSyncOptions) {
  return fs.readFileSync(filePath, { encoding: 'utf8' });
}

async function outputFile({
  filePath,
  data,
  isTrim = true,
  isInsertNewLine = true,
  isFormat = false,
}: OutputFileSyncOptions) {
  let content = isTrim ? data.trim() : data;
  content = isInsertNewLine ? `${content}\n` : content;
  content = isFormat ? await format(content) : content;
  fs.outputFileSync(filePath, content, { encoding: 'utf8' });
  logger.info(`output ${filePath}`);
}

function readJsonFileSync<T extends JsonObjectOrArray>({
  filePath,
}: ReadJsonFileSyncOptions): T | null {
  return fs.readJsonSync(filePath, {
    encoding: 'utf8',
    throws: false,
  }) as T | null;
}

function outputJsonFileSync({ filePath, data }: OutputJsonFileSyncOptions) {
  fs.outputJsonSync(filePath, data, {
    encoding: 'utf8',
    spaces: 2,
    finalEOL: true,
  });
  logger.info(`output ${filePath}`);
}

function mergeJsonFileSync({ filePath, data }: MergeJsonFileSyncOptions) {
  const prevData = readJsonFileSync({ filePath });
  const finalData = merge({}, prevData, data);
  outputJsonFileSync({ filePath, data: finalData });
}

async function outputEsmFile({
  filePath,
  data,
  leadingComments = '',
  isFormat = true,
}: OutputEsmFileSyncOptions) {
  const content = `${leadingComments}
  export default ${stringifyJavaScript(data) ?? ''};`;
  await outputFile({
    filePath,
    data: content,
    isFormat,
  });
}

async function outputCjsFile({
  filePath,
  data,
  leadingComments = '',
  isFormat = true,
}: OutputCjsFileSyncOptions) {
  const content = `${leadingComments}
  module.exports = ${stringifyJavaScript(data) ?? ''};`;
  await outputFile({
    filePath,
    data: content,
    isFormat,
  });
}

async function outputFormatFile({
  filePath,
  format: formatType,
  data,
  leadingComments = '',
}: OutputFormatFileSyncOptions) {
  switch (formatType) {
    case 'json': {
      outputJsonFileSync({ filePath, data });
      break;
    }
    case 'esm': {
      await outputEsmFile({ filePath, data, leadingComments });
      break;
    }
    case 'cjs': {
      await outputCjsFile({
        filePath,
        data,
        leadingComments,
      });
      break;
    }
    case 'text': {
      await outputFile({ filePath, data });
      break;
    }
    default: {
      await outputFile({ filePath, data });
      break;
    }
  }
}

function copySync({ src, dest, ...rest }: CopySyncOptions) {
  fs.copySync(src, dest, rest);
  logger.info(`copy ${src} to ${dest}`);
}

export {
  copySync,
  mergeJsonFileSync,
  outputEsmFile,
  outputFile,
  outputFormatFile,
  outputJsonFileSync,
  readFileSync,
  readJsonFileSync,
};

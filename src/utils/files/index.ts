import * as fs from 'fs-extra';
import prettier from 'prettier';

import * as prettierConfig from '@/templates/prettier/prettier.config';

export function a() {}

export function outputFileSync({
  file,
  data,
  isFormat = false,
}: {
  file: string;
  data: string;
  isFormat?: boolean;
}) {
  const content = isFormat ? prettier.format(data, prettierConfig) : data;
  fs.outputFileSync(file, content);
}

export function outputCommonJSFileSync({
  file,
  data,
  isFormat = true,
}: {
  file: string;
  data: unknown;
  isFormat?: boolean;
}) {
  const content = `module.exports = ${JSON.stringify(data, null, 2)};`;
  outputFileSync({
    file,
    data: content,
    isFormat,
  });
}

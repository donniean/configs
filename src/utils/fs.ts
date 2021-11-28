import { resolve } from 'node:path';

import { copySync, writeFileSync } from 'fs-extra';
import { format } from 'prettier';

import prettierFormatOptions from '@/prettier/templates/.prettierrc';
import { dest, getDestFilePath, getTemplatesFilePath } from '@/utils/paths';

const copyFilesToDestByTemplates = ({ modulePath, fileNames, options }) => {
  const array = Array.isArray(fileNames) ? fileNames : [fileNames];
  array.forEach((fileName) => {
    const srcFilePath = getTemplatesFilePath({ modulePath, fileName });
    const destFilePath = getDestFilePath({ filePath: fileName });
    copy(srcFilePath, destFilePath, options).catch((error_) => error(error_));
  });
};

const writeFileToDest = ({ fileName, data }) =>
  writeFile(resolve(dest, fileName), data, (err) => {
    if (err) {
      error(err);
    }
  });

const writeObjectToDestModuleJSFile = ({ fileName, data }) => {
  const string = `module.exports=${JSON.stringify(data)};`;
  const stringFormatted = prettier.format(
    string,
    merge({}, prettierFormatOptions, { parser: 'babel' })
  );
  writeFile(resolve(dest, fileName), stringFormatted, (err) => {
    if (err) {
      error(err);
    }
  });
};

const copyFilesToDestByTemplatesSync = ({
  modulePath,
  fileNames,
  options,
}: {
  modulePath: string;
  fileNames: string[];
  options: object;
}) => {
  const array = Array.isArray(fileNames) ? fileNames : [fileNames];
  array.forEach((fileName) => {
    const srcFilePath = getTemplatesFilePath({ modulePath, fileName });
    const destFilePath = getDestFilePath({ filePath: fileName });
    copySync(srcFilePath, destFilePath, options);
  });
};

const writeFileToDestSync = ({
  fileName,
  data,
}: {
  fileName: string;
  data: string;
}) => {
  writeFileSync(resolve(dest, fileName), data);
};

const writeObjectToDestModuleJSFileSync = ({
  fileName,
  data,
}: {
  fileName: string;
  data: object | string;
}) => {
  const res = typeof data === 'string' ? data : JSON.stringify(data);
  const string = `module.exports=${res};`;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
  const stringFormatted: string = format(string, prettierFormatOptions);
  writeFileSync(resolve(dest, fileName), stringFormatted);
};

export {
  copyFilesToDestByTemplates,
  writeFileToDest,
  writeObjectToDestModuleJSFile,
  copyFilesToDestByTemplatesSync,
  writeFileToDestSync,
  writeObjectToDestModuleJSFileSync,
};

import {path} from 'node:path';

import {copy, copySync, writeFile, writeFileSync} from 'fs-extra';
import prettier from 'prettier';
import {merge} from 'webpack-merge';

import prettierFormatOptions from '@/prettier/templates/.prettierrc';
import {error} from '@/utils/console';
import {dest, getDestFilePath, getTemplatesFilePath} from '@/utils/paths';

const copyFilesToDestByTemplates = ({modulePath, fileNames, options}) => {
  const array = Array.isArray(fileNames) ? fileNames : [fileNames];
  array.forEach((fileName) => {
    const srcFilePath = getTemplatesFilePath({modulePath, fileName});
    const destFilePath = getDestFilePath({filePath: fileName});
    copy(srcFilePath, destFilePath, options).catch((error_) => error(error_));
  });
};

const writeFileToDest = ({fileName, data}) =>
  writeFile(resolve(dest, fileName), data, (err) => {
    if (err) {
      error(err);
    }
  });

const writeObjectToDestModuleJSFile = ({fileName, data}) => {
  const string = `module.exports=${JSON.stringify(data)};`;
  const stringFormatted = prettier.format(
    string,
    merge({}, prettierFormatOptions, {parser: 'babel'})
  );
  writeFile(resolve(dest, fileName), stringFormatted, (err) => {
    if (err) {
      error(err);
    }
  });
};

const copyFilesToDestByTemplatesSync = ({modulePath, fileNames, options}) => {
  const array = Array.isArray(fileNames) ? fileNames : [fileNames];
  array.forEach((fileName) => {
    const srcFilePath = getTemplatesFilePath({modulePath, fileName});
    const destFilePath = getDestFilePath({filePath: fileName});
    copySync(srcFilePath, destFilePath, options);
  });
};

const writeFileToDestSync = ({fileName, data}) => {
  writeFileSync(resolve(dest, fileName), data);
};

const writeObjectToDestModuleJSFileSync = ({fileName, data}) => {
  const s = typeof data === 'string' ? data : JSON.stringify(data);
  const string = `module.exports=${s};`;
  const stringFormatted = prettier.format(string, prettierFormatOptions);
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

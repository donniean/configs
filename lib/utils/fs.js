const { resolve } = require('path');
const { copy, writeFile, copySync, writeFileSync } = require('fs-extra');
const prettier = require('prettier');

const { dest, getTemplatesFilePath, getDestFilePath } = require('./paths');
const { error } = require('./console');
const prettierFormatOptions = require('../prettier/templates/.prettierrc.js');

const copyFilesToDestByTemplates = ({ modulePath, fileNames, options }) => {
  const array = Array.isArray(fileNames) ? fileNames : [fileNames];
  array.forEach((fileName) => {
    const srcFilePath = getTemplatesFilePath({ modulePath, fileName });
    const destFilePath = getDestFilePath({ filePath: fileName });
    copy(srcFilePath, destFilePath, options).catch((err) => error(err));
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
  // TODO: No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred.
  const stringFormatted = prettier.format(string, prettierFormatOptions);
  writeFile(resolve(dest, fileName), stringFormatted, (err) => {
    if (err) {
      error(err);
    }
  });
};

const copyFilesToDestByTemplatesSync = ({ modulePath, fileNames, options }) => {
  const array = Array.isArray(fileNames) ? fileNames : [fileNames];
  array.forEach((fileName) => {
    const srcFilePath = getTemplatesFilePath({ modulePath, fileName });
    const destFilePath = getDestFilePath({ filePath: fileName });
    copySync(srcFilePath, destFilePath, options);
  });
};

const writeFileToDestSync = ({ fileName, data }) => {
  writeFileSync(resolve(dest, fileName), data);
};

const writeObjectToDestModuleJSFileSync = ({ fileName, data }) => {
  const string = `module.exports=${JSON.stringify(data)};`;
  const stringFormatted = prettier.format(string, prettierFormatOptions);
  writeFileSync(resolve(dest, fileName), stringFormatted);
};

/* function copyTplFileByTemplate({ context, fileName, data }) {
  context.fs.copyTpl(
    context.templatePath(fileName),
    context.destinationPath(fileName),
    data
  );
}

function copyTplFilesByTemplate({ context, fileNames, data }) {
  fileNames.forEach((fileName) =>
    copyTplFileFromTemplate({ context, fileName, data })
  );
} */

module.exports = {
  copyFilesToDestByTemplates,
  writeFileToDest,
  writeObjectToDestModuleJSFile,
  copyFilesToDestByTemplatesSync,
  writeFileToDestSync,
  writeObjectToDestModuleJSFileSync,
};

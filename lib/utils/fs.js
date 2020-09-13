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

const writeObjectToModuleJSFile = ({ fileName, data }) => {
  const string = `module.exports=${JSON.stringify(data)};`;
  const stringFormatted = prettier.format(string, prettierFormatOptions);
  writeFile(resolve(dest, fileName), stringFormatted, (err) => {
    error(err);
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

const writeObjectToModuleJSFileSync = ({ fileName, data }) => {
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
  writeObjectToModuleJSFile,
  copyFilesToDestByTemplatesSync,
  writeObjectToModuleJSFileSync,
};

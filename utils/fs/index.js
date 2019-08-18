'use strict';

const prettier = require('prettier');

const prettierFormatOptions = require('../../generators/prettier/templates/prettier.config');

function copyFileFromTemplate({ context, fileName }) {
  context.fs.copy(
    context.templatePath(fileName),
    context.destinationPath(fileName)
  );
}

function copyFilesFromTemplate({ context, fileNames }) {
  fileNames.forEach(fileName => copyFileFromTemplate({ context, fileName }));
}

function copyTplFileFromTemplate({ context, fileName, data }) {
  context.fs.copyTpl(
    context.templatePath(fileName),
    context.destinationPath(fileName),
    data
  );
}

function copyTplFilesFromTemplate({ context, fileNames, data }) {
  fileNames.forEach(fileName =>
    copyTplFileFromTemplate({ context, fileName, data })
  );
}

function writeObjectModuleJS({ context, fileName, object }) {
  let contents = `module.exports=${JSON.stringify(object)};`;
  contents = prettier.format(contents, prettierFormatOptions);
  context.fs.write(context.destinationPath(fileName), contents);
}

module.exports = {
  copyFileFromTemplate,
  copyFilesFromTemplate,
  copyTplFileFromTemplate,
  copyTplFilesFromTemplate,
  writeObjectModuleJS
};

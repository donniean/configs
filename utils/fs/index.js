'use strict';

const prettier = require('prettier');

const prettierFormatOptions = require('../../generators/prettier/templates/prettier.config');

function copyTemplateFile({ context, fileName }) {
  context.fs.copy(
    context.templatePath(fileName),
    context.destinationPath(fileName)
  );
}

function copyTemplateFiles({ context, fileNames }) {
  fileNames.forEach(fileName => copyTemplateFile({ context, fileName }));
}

function writeObjectModuleJS({ context, fileName, object }) {
  let contents = `module.exports=${JSON.stringify(object)};`;
  contents = prettier.format(contents, prettierFormatOptions);
  context.fs.write(context.destinationPath(fileName), contents);
}

module.exports = {
  copyTemplateFile,
  copyTemplateFiles,
  writeObjectModuleJS
};

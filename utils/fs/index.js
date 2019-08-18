function copyConfigTemplateFile(...path) {
  const { length } = path;
  const file = path[length - 1];
  const templatePath = this.templatePath(...path);
  const destinationPath = this.destinationPath(file);
  this.fs.copy(templatePath, destinationPath);
}

module.exports = { copyConfigTemplateFile };

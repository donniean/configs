const { copyFilesToDestByTemplates } = require('../utils/fs');

module.exports = () => {
  const fileNames = ['.editorconfig'];
  copyFilesToDestByTemplates({ modulePath: __dirname, fileNames });
};

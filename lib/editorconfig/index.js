const { copyFilesToDestByTemplatesSync } = require('../utils/fs');

module.exports = () => {
  const fileNames = ['.editorconfig'];
  copyFilesToDestByTemplatesSync({ modulePath: __dirname, fileNames });
};

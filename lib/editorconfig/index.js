const { copyFilesToDestByTemplatesSync } = require('../utils/fs');

module.exports = async () => {
  const fileNames = ['.editorconfig'];
  copyFilesToDestByTemplatesSync({ modulePath: __dirname, fileNames });
};

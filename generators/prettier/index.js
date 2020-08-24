const Generator = require('yeoman-generator');

const {
  extendPackageJSON,
  extendDevDependencies,
} = require('../../utils/package-json');
const { copyFilesFromTemplate } = require('../../utils/fs');

module.exports = class extends Generator {
  /* constructor(args, opts) {
    super(args, opts);
  } */

  async writing() {
    const packageNames = ['prettier'];
    const fileNames = ['prettier.config.js', '.prettierignore'];
    await extendDevDependencies({ context: this, packageNames });
    copyFilesFromTemplate({ context: this, fileNames });
    extendPackageJSON({
      context: this,
      json: {
        scripts: {
          prettier:
            'npx prettier "**/*.{js,ts,jsx,tsx,json,html,vue,css,less,scss,md,yaml}"',
        },
      },
    });
  }
};

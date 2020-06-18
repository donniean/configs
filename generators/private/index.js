const Generator = require('yeoman-generator');

const { extendPackageJSON } = require('../../utils/package-json');

module.exports = class extends Generator {
  /* constructor(args, opts) {
    super(args, opts);
  } */

  writing() {
    extendPackageJSON({
      context: this,
      json: {
        private: true,
      },
    });
  }
};

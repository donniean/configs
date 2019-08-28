const Generator = require('yeoman-generator');
const moment = require('moment');

const { copyTplFileFromTemplate } = require('../../utils/fs');
const {
  getPackageJSON,
  extendPackageJSON
} = require('../../utils/package-json');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  writing() {
    const fileName = 'LICENSE';
    const hasLicenseFile = this.fs.exists(this.destinationPath(fileName));
    extendPackageJSON({ context: this, json: { license: 'MIT' } });
    if (!hasLicenseFile) {
      const year = moment().year();
      const json = getPackageJSON({ context: this });
      const { author = '' } = json;
      const data = { year, author };
      copyTplFileFromTemplate({ context: this, fileName, data });
    }
  }
};

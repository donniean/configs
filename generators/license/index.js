'use strict';

const Generator = require('yeoman-generator');
const moment = require('moment');

// const {} = require('../../utils/fs');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  writing() {
    const fileName = 'LICENSE';
    const hasLicenseFile = this.fs.exists(this.destinationPath(fileName));
    this.log('hasLicenseFile', hasLicenseFile);
    if (!hasLicenseFile) {
      const year = moment().year();
      this.log(year);
    }
  }
};

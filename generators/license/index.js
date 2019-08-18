'use strict';

const Generator = require('yeoman-generator');
const moment = require('moment');

const { copyFileFromTemplate } = require('../../utils/fs');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  writing() {
    const fileName = 'LICENSE';
    const hasLicenseFile = this.fs.exists(this.destinationPath(fileName));
    if (!hasLicenseFile) {
      const year = moment().year();
      const data = { year, author: 'aaa' };
      copyFileFromTemplate({ context: this, fileName, data });
    }
  }
};

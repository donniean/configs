'use strict';

const Generator = require('yeoman-generator');
const sortPackageJson = require('sort-package-json');

const {
  getPackageJSON,
  extendPackageJSON
} = require('../../utils/package-json');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  writing() {
    let json = getPackageJSON({ context: this });
    json = sortPackageJson(json);
    extendPackageJSON({ context: this, json });
  }
};

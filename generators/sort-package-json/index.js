'use strict';

const Generator = require('yeoman-generator');
const sortPackageJson = require('sort-package-json');

const {
  getPackageJSON,
  writePackageJSON
} = require('../../utils/package-json');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  writing() {
    let json = getPackageJSON({ context: this });
    const { scripts } = json;
    json = sortPackageJson(json);
    json.scripts = scripts;
    writePackageJSON({ context: this, json });
  }
};

'use strict';

const Generator = require('yeoman-generator');

const request = require('../../utils/request');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async writing() {
    const url =
      'https://raw.githubusercontent.com/alexkaratarakis/gitattributes/master/Web.gitattributes';
    const fileName = '.gitattributes';
    const res = await request(url);
    if (typeof res === 'string') {
      this.fs.write(this.destinationPath(fileName), res);
    }
  }
};

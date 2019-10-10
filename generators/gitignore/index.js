const Generator = require('yeoman-generator');

const request = require('../../utils/request');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async writing() {
    const url =
      'https://www.gitignore.io/api/code,flutter,grunt,jetbrains,jetbrains+all,macos,node,osx,reactnative,sass,visualstudiocode,windows';
    const fileName = '.gitignore';
    const res = await request(url);
    if (typeof res === 'string') {
      const custom = [
        '# Custom',
        'build/',
        'dist/',
        'miniprogram_npm/',
        '!public/',
        '!bin/',
        '!.env',
        '!.env.test'
      ].join('\n');
      const contents = [res, '\n', custom, '\n'].join('');
      this.fs.write(this.destinationPath(fileName), contents);
    }
  }
};

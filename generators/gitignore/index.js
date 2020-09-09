const Generator = require('yeoman-generator');

const request = require('../../utils/request');

module.exports = class extends Generator {
  async writing() {
    const url =
      'https://www.toptal.com/developers/gitignore/api/grunt,jetbrains,macos,node,sass,visualstudiocode,windows,yarn';
    const fileName = '.gitignore';
    const res = await request(url);
    if (typeof res === 'string') {
      const custom = ['### Custom ###', 'build/', 'miniprogram_npm/'].join(
        '\n'
      );
      const contents = [res, '\n', custom, '\n'].join('');
      this.fs.write(this.destinationPath(fileName), contents);
    }
  }
};

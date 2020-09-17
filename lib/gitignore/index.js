const request = require('../utils/request');
const { writeFileToDest } = require('../utils/fs');

module.exports = async () => {
  const url =
    'https://www.toptal.com/developers/gitignore/api/grunt,jetbrains,macos,node,sass,visualstudiocode,windows,yarn';
  const fileName = '.gitignore';
  const res = await request(url);
  if (typeof res === 'string') {
    const custom = ['### Custom ###', 'build/', 'miniprogram_npm/'].join('\n');
    const data = [res, '\n', custom, '\n'].join('');
    writeFileToDest({ fileName, data });
  }
};

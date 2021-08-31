const request = require('../utils/request');
const { writeFileToDestSync } = require('../utils/fs');
const CUSTOM = require('./constants');

module.exports = async () => {
  const templates = [
    'jetbrains',
    'macos',
    'node',
    'sass',
    /* cspell:disable-next-line */
    'visualstudiocode',
    'windows',
    'yarn',
  ].join(',');
  const url = `https://www.toptal.com/developers/gitignore/api/${templates}`;
  const fileName = '.gitignore';
  const res = await request(url);
  if (typeof res === 'string') {
    const data = [res, '\n', CUSTOM.join('\n'), '\n'].join('');
    writeFileToDestSync({ fileName, data });
  }
};

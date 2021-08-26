const request = require('../utils/request');
const { writeFileToDestSync } = require('../utils/fs');

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
    const custom = [
      '### Custom ###',
      'build/',
      'miniprogram_npm/',
      '!.env',
      '!.env.local',
      '!.env.development',
      '!.env.test',
      '!.env.production',
      '!.env.development.local',
      '!.env.test.local',
      '!.env.production.local',
    ].join('\n');
    const data = [res, custom].join('\n');
    data.push('\n');
    writeFileToDestSync({ fileName, data });
  }
};

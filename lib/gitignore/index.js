const request = require('../utils/request');
const { writeFileToDestSync } = require('../utils/fs');
const { TEMPLATES, CUSTOM } = require('./constants');

module.exports = async () => {
  const url = `https://www.toptal.com/developers/gitignore/api/${TEMPLATES.join(
    ','
  )}`;
  const fileName = '.gitignore';
  const res = await request(url);
  if (typeof res === 'string') {
    const data = [res, '\n', CUSTOM.join('\n'), '\n'].join('');
    writeFileToDestSync({ fileName, data });
  }
};

const request = require('../utils/request');
const { writeFileToDestSync } = require('../utils/fs');

module.exports = async () => {
  const url =
    'https://raw.githubusercontent.com/alexkaratarakis/gitattributes/master/Web.gitattributes';
  const fileName = '.gitattributes';
  const data = await request(url);
  if (typeof data === 'string') {
    writeFileToDestSync({ fileName, data });
  }
};

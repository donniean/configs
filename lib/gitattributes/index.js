const request = require('../utils/request');
const { writeFileToDest } = require('../utils/fs');

module.exports = async () => {
  const url =
    'https://raw.githubusercontent.com/alexkaratarakis/gitattributes/master/Web.gitattributes';
  const fileName = '.gitattributes';
  const data = await request(url);
  if (typeof data === 'string') {
    writeFileToDest({ fileName, data });
  }
};

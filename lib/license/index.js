const { pathExistsSync, readFileSync } = require('fs-extra');
const moment = require('moment');
const { template } = require('lodash');

const { getTemplatesFilePath, getDestFilePath } = require('../utils/paths');
const { writeFileToDestSync } = require('../utils/fs');
const packageJson = require('../utils/package-json');
const { warn } = require('../utils/console');

module.exports = async () => {
  const fileName = 'LICENSE';
  const hasLicenseFile = pathExistsSync(
    getDestFilePath({ filePath: fileName })
  );
  await packageJson.merge({ data: { license: 'MIT' } });

  if (!hasLicenseFile) {
    const year = moment().year();
    const json = packageJson.readSync();
    const { author = '' } = json;
    if (author) {
      const data = { year, author };
      const string = readFileSync(
        getTemplatesFilePath({ modulePath: __dirname, fileName })
      );
      const compiled = template(string);
      const d = compiled(data);
      writeFileToDestSync({ fileName, data: d });
    } else {
      warn('LICENSE file was not created, because no "author" in package.json');
    }
  }
};

const { pathExistsSync, readFileSync } = require('fs-extra');
const moment = require('moment');
const { template } = require('lodash');

const { getTemplatesFilePath, getDestFilePath } = require('../utils/paths');
const { writeFileToDestSync } = require('../utils/fs');
const packageJson = require('../utils/package-json');

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
    const data = { year, author };
    const string = readFileSync(
      getTemplatesFilePath({ modulePath: __dirname, fileName })
    );
    const compiled = template(string);
    const d = compiled(data);
    writeFileToDestSync({ fileName, data: d });
  }
};

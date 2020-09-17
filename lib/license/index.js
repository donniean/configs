const { pathExistsSync, readFile } = require('fs-extra');
const moment = require('moment');
const { template } = require('lodash');

const { getTemplatesFilePath, getDestFilePath } = require('../utils/paths');
const { writeFileToDest } = require('../utils/fs');
const packageJson = require('../utils/package-json');

module.exports = async () => {
  const fileName = 'LICENSE';
  const hasLicenseFile = pathExistsSync(
    getDestFilePath({ filePath: fileName })
  );
  packageJson.merge({ data: { license: 'MIT' } });

  if (!hasLicenseFile) {
    const year = moment().year();
    const json = packageJson.readSync();
    const { author = '' } = json;
    const data = { year, author };
    const string = await readFile(
      getTemplatesFilePath({ modulePath: __dirname, fileName })
    );
    const compiled = template(string);
    const d = compiled(data);
    writeFileToDest({ fileName, data: d });
  }
};

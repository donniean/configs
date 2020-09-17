const sortPackageJson = require('sort-package-json');

const packageJson = require('../utils/package-json');

module.exports = async () => {
  const json = await packageJson.read();
  const { scripts } = json;
  const data = sortPackageJson(json);
  data.scripts = scripts;
  packageJson.write({ data });
};

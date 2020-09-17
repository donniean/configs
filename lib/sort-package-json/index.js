const sortObject = require('sort-object-keys');
const sortPackageJson = require('sort-package-json');

const packageJson = require('../utils/package-json');

module.exports = async () => {
  const json = packageJson.readSync();
  const { scripts } = json;
  const data = sortPackageJson(json);
  data.scripts = sortObject(scripts, [
    'dev',
    'server',
    'build',
    'prettier',
    'eslint',
    'stylelint',
    'lint',
    'cspell',
    'commit',
    'release',
    'pub',
  ]);
  packageJson.writeSync({ data });
};

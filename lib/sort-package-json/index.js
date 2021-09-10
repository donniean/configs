const sortObject = require('sort-object-keys');
const sortPackageJson = require('sort-package-json');

const packageJson = require('../utils/package-json');

module.exports = async () => {
  const json = packageJson.readSync();
  const { scripts } = json;
  const data = sortPackageJson(json);
  data.scripts = sortObject(scripts, [
    'dev',
    'develop',
    'start',
    'server',
    'build',
    'serve',
    'analyze',
    'clean',
    'prettier',
    'eslint',
    'stylelint',
    'cspell',
    'prepare',
    'pre-commit',
    'commit',
    'release',
    'pub',
  ]);
  packageJson.writeSync({ data });
};

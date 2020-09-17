const { pathExistsSync } = require('fs-extra');
const readPackage = require('read-pkg');
const writePackage = require('write-pkg');
const { merge: wm } = require('webpack-merge');
const latestVersion = require('latest-version');
const { v4: uuidV4 } = require('uuid');

const { packageJson } = require('./paths');
const spinnies = require('./spinnies');

const read = ({ options = { normalize: false } } = {}) => readPackage(options);

const write = ({ data }) => writePackage(data);

const merge = ({ data }) =>
  read().then((res) => write({ data: wm({}, res, data) }));

const mergePackages = async ({ packageNames, isDevDependencies }) => {
  const uuid = uuidV4();
  const key = isDevDependencies ? 'devDependencies' : 'dependencies';
  const data = {
    [key]: {},
  };
  const promises = packageNames.map(async (packageName) => {
    const version = await latestVersion(packageName);
    data[key][packageName] = `^${version}`;
    return version;
  });
  spinnies.add(uuid, {
    text: `Get npm packages latest version: ${packageNames.join(', ')}`,
  });
  await Promise.all(promises);
  spinnies.succeed(uuid, {
    text: `Success - Get npm packages latest version: ${packageNames.join(
      ', '
    )}`,
  });
  merge({ data });
};

const mergeDependencies = async ({ packageNames }) => {
  await mergePackages({ packageNames, devDependencies: false });
};

const mergeDevDependencies = async ({ packageNames }) => {
  await mergePackages({ packageNames, devDependencies: true });
};

const existsSync = () => pathExistsSync(packageJson);

const readSync = ({ options = { normalize: false } } = {}) =>
  readPackage.sync(options);

const writeSync = ({ data }) => writePackage.sync(data);

const mergeSync = ({ data }) => {
  const res = readSync();
  writeSync({ data: wm({}, res, data) });
};

module.exports = {
  read,
  write,
  merge,
  mergePackages,
  mergeDependencies,
  mergeDevDependencies,
  existsSync,
  readSync,
  writeSync,
  mergeSync,
};

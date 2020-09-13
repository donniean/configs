const { pathExistsSync } = require('fs-extra');
const readPackage = require('read-pkg');
const writePackage = require('write-pkg');
const { merge: wm } = require('webpack-merge');
const latestVersion = require('latest-version');
const ora = require('ora');

const { packageJson } = require('./paths');

const read = ({ options = { normalize: false } } = {}) => readPackage(options);

const write = ({ data }) => writePackage(data);

const merge = ({ data }) =>
  read().then((res) => write({ data: wm({}, res, data) }));

const mergePackages = async ({ packageNames, isDevDependencies }) => {
  const key = isDevDependencies ? 'devDependencies' : 'dependencies';
  const data = {
    [key]: {},
  };
  const promises = packageNames.map(async (packageName) => {
    const version = await latestVersion(packageName);
    data[key][packageName] = `^${version}`;
    return version;
  });
  const spinner = ora();
  spinner.start(`Get npm packages latest version: ${packageNames.join(', ')}`);
  await Promise.all(promises);
  spinner.succeed(
    `Success - Get npm packages latest version: ${packageNames.join(', ')}`
  );
  merge({ data });
};

async function mergeDependencies({ packageNames }) {
  await mergePackages({ packageNames, devDependencies: false });
}

async function mergeDevDependencies({ packageNames }) {
  await mergePackages({ packageNames, devDependencies: true });
}

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

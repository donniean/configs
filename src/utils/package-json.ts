import { green } from 'chalk';
import { pathExistsSync } from 'fs-extra';
import latestVersion from 'latest-version';
import ora from 'ora';
import readPackage from 'read-pkg';
import { merge as wm } from 'webpack-merge';
import writePackage from 'write-pkg';

import { packageJson } from '@/utils/paths';

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
    green(
      `Success - Get npm packages latest version: ${packageNames.join(', ')}`
    )
  );
  await merge({ data });
};

const mergeDependencies = async ({ packageNames }) => {
  await mergePackages({ packageNames, isDevDependencies: false });
};

const mergeDevDependencies = async ({ packageNames }) => {
  await mergePackages({ packageNames, isDevDependencies: true });
};

const existsSync = () => pathExistsSync(packageJson);

const readSync = ({ options = { normalize: false } } = {}) =>
  readPackage.sync(options);

const writeSync = ({ data }) => writePackage.sync(data);

const mergeSync = ({ data }) => {
  const res = readSync();
  writeSync({ data: wm({}, res, data) });
};

export {
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

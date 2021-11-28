import chalk from 'chalk';
import { pathExistsSync } from 'fs-extra';
import latestVersion from 'latest-version';
import ora from 'ora';
import { readPackage, readPackageSync } from 'read-pkg';
import { merge as webpackMerge } from 'webpack-merge';
import { writePackage, writePackageSync } from 'write-pkg';

import { packageJson } from '@/utils/paths';

const read = ({ options = { normalize: false } } = {}) => readPackage(options);

const write = ({ data }: { data: object }) => writePackage(data);

const merge = ({ data }: { data: object }) =>
  read().then((res) => write({ data: webpackMerge({}, res, data) }));

const mergePackages = async ({
  packageNames,
  isDevDependencies,
}: {
  packageNames: string[];
  isDevDependencies: boolean;
}) => {
  type Data = {
    [key: string]: {
      [packageName: string]: string;
    };
  };

  const key = isDevDependencies ? 'devDependencies' : 'dependencies';
  const data: Data = {
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
    chalk.green(
      `Success - Get npm packages latest version: ${packageNames.join(', ')}`
    )
  );
  await merge({ data });
};

const mergeDependencies = async ({
  packageNames,
}: {
  packageNames: string[];
}) => {
  await mergePackages({ packageNames, isDevDependencies: false });
};

const mergeDevDependencies = async ({
  packageNames,
}: {
  packageNames: string[];
}) => {
  await mergePackages({ packageNames, isDevDependencies: true });
};

const existsSync = () => pathExistsSync(packageJson);

const readSync = ({ options = { normalize: false } } = {}) =>
  readPackageSync(options);

const writeSync = ({ data }: { data: object }) => writePackageSync(data);

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

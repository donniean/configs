import fs from 'fs-extra';
import latestVersion from 'latest-version';
import ora from 'ora';
import shell from 'shelljs';
import type { PackageJson } from 'type-fest';

import * as files from '@/utils/files';
import logger from '@/utils/logger';
import * as paths from '@/utils/paths';

import type { MergePackageJsonSyncOptions } from './types';

export function readRootPackageJsonSync() {
  const filePath = paths.resolveRoot('package.json');
  return files.readJsonFileSync({ filePath }) as PackageJson;
}

function existsCwdPackageJsonSync() {
  return fs.existsSync(paths.cwdPackageJson);
}

export function checkCwdPackageJsonSync() {
  const isExistsCwdPackageJson = existsCwdPackageJsonSync();

  if (isExistsCwdPackageJson) {
    return true;
  }

  logger.error(`${paths.cwdPackageJson} does not exist, please run "npm init"`);
  return false;
}

export function mergeCwdPackageJsonSync({ data }: MergePackageJsonSyncOptions) {
  const filePath = paths.cwdPackageJson;
  files.mergeJsonFileSync({ filePath, data });
}

export function sortCwdPackageJsonSync() {
  shell.exec(`sort-package-json --quiet "${paths.cwdPackageJson}"`);
  logger.info(`sort ${paths.cwdPackageJson}`);
}

export async function fetchPackageLatestVersion(packageName: string) {
  const spinner = ora({
    prefixText: '[Package Latest Version]',
  });
  try {
    spinner.start(`${packageName} ...`);
    const version = await latestVersion(packageName);
    spinner.succeed(`${packageName}@${version}`);
    return version;
  } catch (error) {
    spinner.fail(`${packageName}: ${(error as Error).message}`);
    return '';
  }
}

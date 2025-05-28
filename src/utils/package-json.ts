import { existsSync, readJsonSync } from 'fs-extra';
import type { PackageJson } from 'type-fest';

import * as logger from '@/utils/logger';
import * as paths from '@/utils/paths';

function readRootPackageJsonSync() {
  const filePath = paths.resolveRoot('package.json');
  return readJsonSync(filePath, {
    encoding: 'utf8',
    throws: false,
  }) as PackageJson;
}

function checkCwdPackageJsonSync() {
  const isExistsCwdPackageJson = existsSync(paths.cwdPackageJson);

  if (!isExistsCwdPackageJson) {
    logger.error(
      `${paths.cwdPackageJson} does not exist, please run "npm init"`,
    );
    return false;
  }

  return true;
}

export { checkCwdPackageJsonSync, readRootPackageJsonSync };

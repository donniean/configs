import * as fs from 'fs-extra';
import type { PackageJson } from 'type-fest';

import * as paths from '@/utils/paths';

function readRootPackageJsonSync() {
  const filePath = paths.resolveRoot('package.json');
  return fs.readJsonSync(filePath, {
    encoding: 'utf8',
    throws: false,
  }) as PackageJson;
}

export { readRootPackageJsonSync };

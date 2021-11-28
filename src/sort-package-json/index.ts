import sortObject from 'sort-object-keys';
import sortPackageJson from 'sort-package-json';

import * as packageJson from '@/utils/package-json';

export default async () => {
  const json = packageJson.readSync();
  const {scripts} = json;
  const data = sortPackageJson(json);
  data.scripts = sortObject(scripts, [
    'dev',
    'develop',
    'start',
    'server',
    'build',
    'serve',
    'analyze',
    'test',
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
  packageJson.writeSync({data});
};

import { Command } from 'commander';

import { readRootPackageJsonSync } from '@/utils/package-json';

import create from './create';
import init from './init';

export default function cli() {
  const program = new Command();
  const version = readRootPackageJsonSync().version;

  if (version) {
    program.version(version, '-v, --version');
  }

  program
    .command('init')
    .description('create a configs.config.cjs files')
    .action(() => init());

  program
    .command('create')
    .description('create config files and add packages in package.json')
    .action(() => create());

  program.parse();
}

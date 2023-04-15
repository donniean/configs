import { Command } from 'commander';

import { readRootPackageJsonSync } from '@/utils/package-json';

import create from './create';

export default function cli() {
  const program = new Command();
  const version = readRootPackageJsonSync()?.version;

  if (version) {
    program.version(version, '-v, --version');
  }

  program
    .command('create')
    .description('create config files and add packages in package.json')
    .option('-p, --prompt', 'use prompt')
    .action((options: { prompt?: boolean }) => create(options));

  program.parse();
}

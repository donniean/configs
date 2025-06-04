import { info } from 'node:console';

import { Command } from 'commander';

import { writeMarkdownWithDefaults } from '@/api';
import { readRootPackageJsonSync } from '@/utils/package-json';

const program = new Command();
program.name('configs');

const version = readRootPackageJsonSync().version;

if (version) {
  program.version(version, '-v, --version');
}

program
  .command('md')
  .description('generate markdown file')
  .option('-f, --file <path>', 'output file path')
  .action(async (options: { file?: string }) => {
    const filePath = options.file;
    await writeMarkdownWithDefaults({ filePath });
    info('Markdown file generated successfully');
  });

program.parse();

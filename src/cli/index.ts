import { Command } from 'commander';
import { z } from 'zod/v4';

import { ActionSchema } from '@/schemas';
import logger from '@/utils/logger';
import { readRootPackageJsonSync } from '@/utils/package-json';

import { questions } from './prompts';

const program = new Command();
program.name('configs');

export default function cli() {
  const version = readRootPackageJsonSync().version;

  if (version) {
    program.version(version, '-v, --version');
  }

  program
    .command('cmd')
    .description('generate command')
    .argument('<action>', 'setup or clean')
    .option('-a, --all', 'select all tools')
    .action(async (action: string, options: { all?: boolean }) => {
      const { success, error } = ActionSchema.safeParse(action);
      if (!success) {
        const prettifyError = z.prettifyError(error);
        logger.error(prettifyError);
        return;
      }

      const { all } = options;
      if (all) {
        logger.debug('handle all tools');
      } else {
        try {
          const tools = await questions.tools();
          logger.debug(tools.join(', '));
        } catch (error) {
          if (error instanceof Error && error.name === 'ExitPromptError') {
            // noop; silence this error
          } else {
            throw error;
          }
        }
      }
    });

  program.parse();
}

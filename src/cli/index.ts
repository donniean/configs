import clipboard from 'clipboardy';
import { Command } from 'commander';
import { z } from 'zod/v4';

import { CONFIGS } from '@/configs';
import { ActionSchema } from '@/schemas/actions';
import type { Action } from '@/types/actions';
import type { Configs } from '@/types/configs';
import * as logger from '@/utils/logger';
import {
  checkCwdPackageJsonSync,
  readRootPackageJsonSync,
} from '@/utils/package-json';

import { buildCommands } from './commands';
import { questions } from './prompts';

const program = new Command();
program.name('configs');

export default function cli() {
  const isSuccess = checkCwdPackageJsonSync();
  if (!isSuccess) {
    return;
  }

  const version = readRootPackageJsonSync().version;

  if (version) {
    program.version(version, '-v, --version');
  }

  program
    .command('cmd')
    .description('generate command')
    .argument('<action>', 'setup or clean')
    .option('-a, --all', 'select all tools')
    .action(async (action: Action, options: { all?: boolean }) => {
      const { success, error } = ActionSchema.safeParse(action);
      if (!success) {
        const prettifyError = z.prettifyError(error);
        logger.error(prettifyError);
        return;
      }

      const { all } = options;

      let configs: Configs = [];

      if (all) {
        logger.debug('handle all tools');
        configs = CONFIGS;
      } else {
        try {
          const tools = await questions.tools();
          configs = CONFIGS.filter(({ key }) => tools.includes(key));
        } catch (error) {
          if (error instanceof Error && error.name === 'ExitPromptError') {
            // noop; silence this error
          } else {
            throw error;
          }
        }
      }

      const commandMap = buildCommands(configs);
      const commands = commandMap[action];
      const output = commands.join('\n\n');
      logger.info(`\n${output}`);
      clipboard.writeSync(output);
    });

  program.parse();
}

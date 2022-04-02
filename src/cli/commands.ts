import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export default function commands() {
  const { argv } = yargs(hideBin(process.argv))
    .options({
      prompt: {
        alias: 'p',
        describe: 'prompt',
        type: 'boolean',
      },
    })
    .help()
    .alias('h', 'help')
    .version()
    .alias('v', 'version');

  return argv;
}

import * as prettierConfig from '@/templates/prettier/prettier.config';
import logger from '@/utils/logger';
import paths from '@/utils/paths';

import commands from './commands';

console.log(prettierConfig);

export default function cli() {
  const argv = commands();

  logger.log(argv);

  logger.log(paths);
}

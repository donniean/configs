import logger from '@/utils/logger';
import paths from '@/utils/paths';

import commands from './commands';

export default function cli() {
  const argv = commands();

  logger.log(argv);

  logger.log(paths);
}

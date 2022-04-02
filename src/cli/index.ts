import logger from '@/utils/logger';

import commands from './commands';

export default function cli() {
  const argv = commands();

  logger.log(argv);
}

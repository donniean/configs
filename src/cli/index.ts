import * as configFile from '@/utils/config-file';
import logger from '@/utils/logger';

import commands from './commands';

export default function cli() {
  const argv = commands();

  const configByCurrentFile = configFile.readConfig();

  logger.log(argv);
  logger.log(configByCurrentFile);
}

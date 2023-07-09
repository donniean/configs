import logger from '@/utils/logger';

export function onAfterAllSuccess() {
  logger.messageOnly('Make sure to have a tsconfig.json file.', {
    isLfBefore: true,
  });
}

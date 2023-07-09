import logger from '@/utils/logger';

export function onAfterAllSuccess() {
  logger.messageOnly(
    "If you don't use vite, make sure to have a vitest.config.(js/mjs/cjs/ts) file.",
    {
      isLfBefore: true,
    },
  );
}

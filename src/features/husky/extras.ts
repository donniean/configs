import type { OnAfterAllSuccessOptions } from '@/types/feature-configs';
import { getFeatureDisplayNameByKey } from '@/utils/features';
import logger from '@/utils/logger';

export function onAfterAllSuccess({
  featureKey,
  normalizedConfigsConfig,
}: OnAfterAllSuccessOptions) {
  const lintStaged = normalizedConfigsConfig.features?.['lint-staged'];
  const commitlint = normalizedConfigsConfig.features?.commitlint;

  let commands = [];

  if (lintStaged) {
    commands.push("npx husky set .husky/pre-commit 'npm run pre-commit'");
  }

  if (commitlint) {
    commands.push(
      `npx husky set .husky/commit-msg 'npx --no -- commitlint --edit "$1"'`
    );
  }

  if (commands.length > 0) {
    commands = ['npm install', ...commands];
    logger.messageOnly(
      `If you haven't init ${getFeatureDisplayNameByKey(
        featureKey
      )}, you need to run: `,
      {
        isLfBefore: true,
      }
    );
    logger.messageOnly(commands.join(' && '), {
      isLfBefore: true,
      isInverseMessage: true,
    });
  }
}

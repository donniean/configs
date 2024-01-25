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
    commands.push('echo "npm run pre-commit" > .husky/pre-commit');
  }

  if (commitlint) {
    commands.push(
      `echo 'npx --no -- commitlint --edit "$1"' > .husky/commit-msg`,
    );
  }

  if (commands.length > 0) {
    commands = ['npm install', ...commands];
    logger.messageOnly(
      `If you haven't init ${getFeatureDisplayNameByKey(
        featureKey,
      )}, you need to run: `,
      {
        isLfBefore: true,
      },
    );
    logger.messageOnly(commands.join('; '), {
      isLfBefore: true,
      isInverseMessage: true,
    });
  }
}

// echo "npm run pre-commit" > .husky/pre-commit

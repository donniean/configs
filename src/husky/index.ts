import {command, warn} from '@/utils/console';
import * as packageJson from '@/utils/package-json';

function showTips({parsedConfig}) {
  const {modules = {}} = parsedConfig;
  const {'lint-staged': lintStaged = [], commitlint = []} = modules;
  const [useLintStaged] = lintStaged;
  const [useCommitlint] = commitlint;

  let commands = [];

  if (useLintStaged) {
    commands.push("npx husky set .husky/pre-commit 'npm run pre-commit'");
  }

  if (useCommitlint) {
    commands.push(
      `npx husky set .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`
    );
  }

  if (commands.length > 0) {
    commands = ['npx husky-init', 'npm install', ...commands];
    warn("If you haven't init Husky, you need to run: ");
    command(commands.join(' && '));
  }
}

export default async ({parsedConfig}) => {
  const packageNames = ['husky'];
  await packageJson.mergeDevDependencies({packageNames});
  showTips({parsedConfig});
};

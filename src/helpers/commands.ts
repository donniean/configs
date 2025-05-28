import { CONFIG_BASE_URL } from '@/constants/configs';
import type {
  CleanCommandAction,
  Config,
  SetupCommandAction,
} from '@/types/configs';
import { buildCommand } from '@/utils/commands';

type GetCommandOptions = Pick<Config, 'name' | 'pkg' | 'filePaths'>;

function buildSetupCommand({
  name,
  pkg,
  filePaths,
  setupCommandAction,
}: GetCommandOptions & {
  setupCommandAction: SetupCommandAction;
}) {
  const errorTitle = `Setup Error(${name})`;

  const { type, command } = setupCommandAction;

  switch (type) {
    case 'pkg.devDependencies.set': {
      const devDependencies = pkg?.devDependencies ?? [];
      if (!(Array.isArray(devDependencies) && devDependencies.length > 0)) {
        throw new Error(
          `${errorTitle}: please set devDependencies in config.pkg`,
        );
      }
      const commands = devDependencies.map(({ packageName, version }) => {
        const packageVersion = (
          version ?? `$(npm view ${packageName} version)`
        ).trim();
        return buildCommand({
          mainCommand: 'npm',
          subCommand: 'pkg set',
          args: [`devDependencies.${packageName}="^${packageVersion}"`],
        });
      });
      return commands.join('\n');
    }
    case 'pkg.scripts.set': {
      const scripts = pkg?.scripts;
      if (!(Array.isArray(scripts) && scripts.length > 0)) {
        throw new Error(`${errorTitle}: Please set scripts in config.pkg`);
      }
      return buildCommand({
        mainCommand: 'npm',
        subCommand: 'pkg set',
        args: scripts.map(({ key, value }) => `scripts.${key}='${value}'`),
      });
    }
    case 'files.download': {
      if (!(Array.isArray(filePaths) && filePaths.length > 0)) {
        throw new Error(`${errorTitle}: Please set filePaths in config`);
      }
      return buildCommand({
        mainCommand: 'curl',
        args: filePaths.map(
          (value) => `--remote-name ${CONFIG_BASE_URL}${value}`,
        ),
      });
    }
    default: {
      return command;
    }
  }
}

function buildCleanCommand({
  name,
  pkg,
  filePaths,
  cleanCommandAction,
}: GetCommandOptions & {
  cleanCommandAction: CleanCommandAction;
}) {
  const errorTitle = `Clean Error(${name})`;

  const { type, command } = cleanCommandAction;

  switch (type) {
    case 'pkg.devDependencies.delete': {
      const devDependencies = pkg?.devDependencies;
      if (!(Array.isArray(devDependencies) && devDependencies.length > 0)) {
        throw new Error(
          `${errorTitle}: please set devDependencies in config.pkg`,
        );
      }
      return buildCommand({
        mainCommand: 'npm',
        subCommand: 'pkg delete',
        args: devDependencies.map(
          (dependency) => `devDependencies.${dependency.packageName}`,
        ),
      });
    }
    case 'pkg.scripts.delete': {
      const scripts = pkg?.scripts;
      if (!(Array.isArray(scripts) && scripts.length > 0)) {
        throw new Error(`${errorTitle}: please set scripts in config.pkg`);
      }
      return buildCommand({
        mainCommand: 'npm',
        subCommand: 'pkg delete',
        args: scripts.map(({ key }) => `scripts.${key}`),
      });
    }
    case 'files.delete': {
      if (!(Array.isArray(filePaths) && filePaths.length > 0)) {
        throw new Error(`${errorTitle}: please set filePaths in config`);
      }
      return buildCommand({
        mainCommand: 'rm',
        args: filePaths,
      });
    }
    default: {
      return command;
    }
  }
}

export { buildCleanCommand, buildSetupCommand };

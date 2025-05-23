type SetupCommandType =
  | 'pkg.devDependencies.install'
  | 'pkg.scripts.set'
  | 'files.download'
  | 'custom';

type CleanCommandType =
  | 'pkg.devDependencies.delete'
  | 'pkg.scripts.delete'
  | 'files.delete'
  | 'custom';

interface SetupCommandAction {
  type: SetupCommandType;
  command?: string;
}

interface CleanCommandAction {
  type: CleanCommandType;
  command?: string;
}

interface Config {
  value: string;
  name: string;
  url?: string;
  pkg?: {
    devDependencies?: string[];
    scripts?: { key: string; value: string }[];
  };
  filePaths?: string[];
  setup: SetupCommandAction[];
  clean: CleanCommandAction[];
}

type Configs = readonly Config[];

export type { CleanCommandAction, Config, Configs, SetupCommandAction };

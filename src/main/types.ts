type InstallCommandType =
  | 'pkg.devDependencies.install'
  | 'pkg.scripts.set'
  | 'files.download'
  | 'custom';

type UninstallCommandType =
  | 'pkg.devDependencies.uninstall'
  | 'pkg.scripts.delete'
  | 'files.delete'
  | 'custom';

interface InstallCommandAction {
  type: InstallCommandType;
  command?: string;
}

interface UninstallCommandAction {
  type: UninstallCommandType;
  command?: string;
}

interface Config {
  name: string;
  url: string;
  pkg?: {
    devDependencies?: string[];
    scripts?: { key: string; value: string }[];
  };
  filePaths?: string[];
  install: InstallCommandAction[];
  uninstall: UninstallCommandAction[];
}

type Configs = readonly Config[];

export type { Config, Configs, InstallCommandAction, UninstallCommandAction };

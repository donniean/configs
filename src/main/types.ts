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

interface InstallCommandItem {
  type: InstallCommandType;
  command?: string;
}

interface UninstallCommandItem {
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
  install: InstallCommandItem[];
  uninstall: UninstallCommandItem[];
}

type Configs = readonly Config[];

export type { Config, Configs, InstallCommandItem, UninstallCommandItem };

type InstallCommandType =
  | 'devDependencies.install'
  | 'packageJson.set'
  | 'files.download';

type UninstallCommandType =
  | 'devDependencies.uninstall'
  | 'packageJson.delete'
  | 'files.delete';

interface InstallCommandItem {
  type?: InstallCommandType;
  values?: string[];
}

interface UninstallCommandItem {
  type?: UninstallCommandType;
  values?: string[];
}

interface Config {
  name: string;
  url: string;
  devDependencies?: string[];
  install: InstallCommandItem[];
  uninstall: UninstallCommandItem[];
}

type Configs = readonly Config[];

export type { Config, Configs, InstallCommandItem, UninstallCommandItem };

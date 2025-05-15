type InstallCommandType =
  | 'devDependencies.install'
  | 'packageJson.set'
  | 'files.download';

type UninstallCommandType = 'packageJson.delete' | 'files.delete';

interface InstallCommandItem {
  type?: InstallCommandType;
  values: string[];
}

interface UninstallCommandItem {
  type: UninstallCommandType;
  values: string[];
}

interface Config {
  name: string;
  url: string;
  install: InstallCommandItem[];
  uninstall: UninstallCommandItem[];
}

type Configs = readonly Config[];

export type { Configs, InstallCommandItem, UninstallCommandItem };

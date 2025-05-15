type InstallCommandType =
  | 'installDevDependencies'
  | 'setPkg'
  | 'createFiles'
  | 'custom';

type UninstallCommandType = 'deletePkg' | 'deleteFiles' | 'custom';

interface InstallItem {
  type: InstallCommandType;
  values: string[];
}

interface UninstallItem {
  type: UninstallCommandType;
  values: string[];
}

interface Config {
  name: string;
  url: string;
  install: InstallItem[];
  uninstall: UninstallItem[];
}

export type { Config, InstallItem };

import fs from 'node:fs';

import type { DataObject } from 'json2md';
import json2md from 'json2md';

import { buildCommand } from '@/utils/commands';
import { resolveCwd } from '@/utils/paths';

import { CONFIG_BASE_URL } from './constants';
import type {
  Config,
  Configs,
  InstallCommandItem,
  UninstallCommandItem,
} from './types';

type GetCommandOptions = Pick<Config, 'name' | 'pkg' | 'filePaths'>;

function getInstallCommand({
  name,
  pkg,
  filePaths,
  installCommandItem,
}: GetCommandOptions & {
  installCommandItem: InstallCommandItem;
}) {
  const errorTitle = `Install Error(${name})`;

  const { type, command } = installCommandItem;

  switch (type) {
    case 'pkg.devDependencies.install': {
      const devDependencies = pkg?.devDependencies;
      if (!(Array.isArray(devDependencies) && devDependencies.length > 0)) {
        throw new Error(
          `${errorTitle}: please set devDependencies in config.pkg`,
        );
      }
      return buildCommand({
        mainCommand: 'npm',
        subCommand: 'install',
        options: ['--save-dev'],
        args: devDependencies,
      });
    }
    case 'pkg.scripts.set': {
      const scripts = pkg?.scripts;
      if (!(Array.isArray(scripts) && scripts.length > 0)) {
        throw new Error(`${errorTitle}: Please set scripts in config.pkg`);
      }
      return buildCommand({
        mainCommand: 'npm',
        subCommand: 'pkg set',
        args: scripts.map(({ key, value }) => `scripts.${key}="${value}"`),
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

function getUninstallCommand({
  name,
  pkg,
  filePaths,
  uninstallCommandItem,
}: GetCommandOptions & {
  uninstallCommandItem: UninstallCommandItem;
}) {
  const errorTitle = `Uninstall Error(${name})`;

  const { type, command } = uninstallCommandItem;

  switch (type) {
    case 'pkg.devDependencies.uninstall': {
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
          (dependency) => `devDependencies.${dependency}`,
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

function getMarkdown(configs: Configs) {
  const sections: DataObject[] = [];
  for (const config of configs) {
    const { name, url, pkg = {}, filePaths = [], install, uninstall } = config;
    const installCommands = install.map((item) =>
      getInstallCommand({ name, pkg, filePaths, installCommandItem: item }),
    );
    const uninstallCommands = uninstall.map((item) =>
      getUninstallCommand({ name, pkg, filePaths, uninstallCommandItem: item }),
    );
    const section: DataObject[] = [
      {
        h2: `[${name}](${url})`,
      },
      {
        p: 'Install',
      },
      {
        code: { language: 'shell', content: installCommands.join('\n\n') },
      },
      {
        p: 'Uninstall',
      },
      {
        code: { language: 'shell', content: uninstallCommands.join('\n\n') },
      },
    ];
    sections.push(section);
  }

  const data = [{ h1: 'Configs' }, ...sections];

  return json2md(data);
}

function writeMarkdownSync({
  fileName,
  content,
}: {
  fileName: string;
  content: string;
}) {
  const filePath = resolveCwd(fileName);
  fs.writeFileSync(filePath, content);
}

export { getMarkdown, writeMarkdownSync };

import fs from 'node:fs';

import type { DataObject } from 'json2md';
import json2md from 'json2md';

import { buildCommand } from '@/utils/commands';
import { resolveCwd } from '@/utils/paths';

import { CONFIG_BASE_URL } from './constants';
import type {
  Configs,
  InstallCommandItem,
  UninstallCommandItem,
} from './types';

function getInstallCommand({
  devDependencies,
  filePaths,
  installCommandItem,
}: {
  devDependencies?: string[] | undefined;
  filePaths?: string[] | undefined;
  installCommandItem: InstallCommandItem;
}) {
  const { type, values } = installCommandItem;
  const args = values ?? [];
  const finalDevDependencies = values ?? devDependencies ?? [];
  const finalFilePaths = values ?? filePaths ?? [];

  switch (type) {
    case 'devDependencies.install': {
      return buildCommand({
        mainCommand: 'npm',
        subCommand: 'install',
        options: ['--save-dev'],
        args: finalDevDependencies,
      });
    }
    case 'packageJson.set': {
      return buildCommand({
        mainCommand: 'npm',
        subCommand: 'pkg set',
        args,
      });
    }
    case 'files.download': {
      return buildCommand({
        mainCommand: 'curl',
        args: finalFilePaths.map((value) => `-O ${CONFIG_BASE_URL}${value}`),
      });
    }
    default: {
      return args.join(' ');
    }
  }
}

function getUninstallCommand({
  devDependencies,
  filePaths,
  uninstallCommandItem,
}: {
  devDependencies?: string[] | undefined;
  filePaths?: string[] | undefined;
  uninstallCommandItem: UninstallCommandItem;
}) {
  const { type, values } = uninstallCommandItem;
  const args = values ?? [];

  switch (type) {
    case 'devDependencies.uninstall': {
      const finalDevDependencies = values ?? devDependencies ?? [];
      return buildCommand({
        mainCommand: 'npm',
        subCommand: 'pkg delete',
        args: finalDevDependencies.map((dep) => `devDependencies.${dep}`),
      });
    }
    case 'packageJson.delete': {
      return buildCommand({
        mainCommand: 'npm',
        subCommand: 'pkg delete',
        args: args,
      });
    }
    case 'files.delete': {
      const finalFilePaths = values ?? filePaths ?? [];
      return buildCommand({
        mainCommand: 'rm',
        args: finalFilePaths,
      });
    }
    default: {
      return args.join(' ');
    }
  }
}

function getMarkdown(configs: Configs) {
  const sections: DataObject[] = [];
  for (const config of configs) {
    const { name, url, devDependencies, filePaths, install, uninstall } =
      config;
    const installCommands = install.map((item) =>
      getInstallCommand({
        devDependencies,
        filePaths,
        installCommandItem: item,
      }),
    );
    const uninstallCommands = uninstall.map((item) =>
      getUninstallCommand({
        devDependencies,
        filePaths,
        uninstallCommandItem: item,
      }),
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

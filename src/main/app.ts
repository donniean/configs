import fs from 'node:fs';

import type { DataObject } from 'json2md';
import json2md from 'json2md';

import { buildCommand } from '@/utils/commands';
import { resolveCwd } from '@/utils/paths';

import type {
  Configs,
  InstallCommandItem,
  UninstallCommandItem,
} from './types';

function getInstallCommand({
  devDependencies,
  installCommandItem,
}: {
  devDependencies?: string[] | undefined;
  installCommandItem: InstallCommandItem;
}) {
  const { type, values } = installCommandItem;
  const args = values ?? [];

  switch (type) {
    case 'devDependencies.install': {
      return buildCommand({
        mainCommand: 'npm',
        subCommand: 'install',
        options: ['--save-dev'],
        args: values ?? devDependencies ?? [],
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
        args: args.map((value) => `-O ${value}`),
      });
    }
    default: {
      return args.join(' ');
    }
  }
}

function getUninstallCommand({
  devDependencies,
  uninstallCommandItem,
}: {
  devDependencies?: string[] | undefined;
  uninstallCommandItem: UninstallCommandItem;
}) {
  const { type, values } = uninstallCommandItem;
  const args = values ?? [];
  const finalDevDependencies = values ?? devDependencies ?? [];

  switch (type) {
    case 'devDependencies.uninstall': {
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
      return buildCommand({
        mainCommand: 'rm',
        args: args,
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
    const { name, url, devDependencies, install, uninstall } = config;
    const installCommands = install.map((item) =>
      getInstallCommand({ devDependencies, installCommandItem: item }),
    );
    const uninstallCommands = uninstall.map((item) =>
      getUninstallCommand({ devDependencies, uninstallCommandItem: item }),
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

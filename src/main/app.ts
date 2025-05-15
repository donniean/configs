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

function getInstallCommand(installCommandItem: InstallCommandItem) {
  const { type, values } = installCommandItem;

  switch (type) {
    case 'devDependencies.install': {
      return buildCommand({
        mainCommand: 'npm',
        subCommand: 'install',
        options: ['--save-dev'],
        args: values,
      });
    }
    case 'packageJson.set': {
      return buildCommand({
        mainCommand: 'npm',
        subCommand: 'pkg set',
        args: values,
      });
    }
    case 'files.download': {
      return buildCommand({
        mainCommand: 'curl',
        args: values.map((value) => `  -O ${value}`),
      });
    }
    default: {
      return values.join(' ');
    }
  }
}

function getUninstallCommand(uninstallCommandItem: UninstallCommandItem) {
  const { type, values } = uninstallCommandItem;

  switch (type) {
    case 'packageJson.delete': {
      return buildCommand({
        mainCommand: 'npm',
        subCommand: 'pkg delete',
        args: values,
      });
    }
    case 'files.delete': {
      return buildCommand({
        mainCommand: 'rm',
        args: values,
      });
    }
    default: {
      return values.join(' ');
    }
  }
}

function getMarkdown(configs: Configs) {
  const sections: DataObject[] = [];
  for (const config of configs) {
    const { name, url, install, uninstall } = config;
    const installCommands = install.map((item) => getInstallCommand(item));
    const uninstallCommands = uninstall.map((item) =>
      getUninstallCommand(item),
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

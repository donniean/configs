import fs from 'node:fs';

import type { DataObject } from 'json2md';
import json2md from 'json2md';

import { resolveCwd } from '@/utils/paths';

import type { Config, InstallItem } from './types';

function getInstallCommand(installItem: InstallItem) {
  const { type, values } = installItem;

  let commands: string[] = [];

  switch (type) {
    case 'installDevDependencies': {
      commands = [
        'npm install --save-dev',
        ...values.map((value) => `  ${value}`),
      ];
      break;
    }
    case 'setPkg': {
      commands = ['npm pkg set', ...values.map((value) => `  ${value}`)];
      break;
    }
    case 'createFiles': {
      commands = ['curl', ...values.map((value) => `  -O ${value}`)];
      break;
    }
    case 'custom': {
      commands = values;
      break;
    }
  }

  return commands.join(' \\ \n');
}

function getInstallCommands(configs: readonly Config[]) {
  const commands: string[] = [];

  for (const config of configs) {
    const { name, install } = config;
    const installCommands = install.map((item) => getInstallCommand(item));
    commands.push(`# ${name}`, ...installCommands);
  }

  return commands.join('\n\n');
}

function getMarkdown(configs: readonly Config[]) {
  const res: DataObject[] = [];
  for (const config of configs) {
    const { name, url, install } = config;
    const installCommands = install.map((item) => getInstallCommand(item));
    const content: DataObject[] = [
      {
        h2: `[${name}](${url})`,
      },
      {
        p: 'Install',
      },
      {
        code: { language: 'shell', content: installCommands.join('\n\n') },
      },
    ];
    res.push(content);
  }

  const md: string = json2md([{ h1: 'Configs' }, ...res]);

  const filePath = resolveCwd('configs.md');
  fs.writeFileSync(filePath, md);
}

export { getInstallCommands, getMarkdown };

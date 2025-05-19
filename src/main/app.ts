import fs from 'node:fs';

import type { DataObject } from 'json2md';
import json2md from 'json2md';
import { remark } from 'remark';
import remarkToc from 'remark-toc';

import { buildCommand } from '@/utils/commands';
import { resolveCwd } from '@/utils/paths';

import { CONFIG_BASE_URL } from './constants';
import type {
  Config,
  Configs,
  InstallCommandAction,
  UninstallCommandAction,
} from './types';

type GetCommandOptions = Pick<Config, 'name' | 'pkg' | 'filePaths'>;

function getInstallCommand({
  name,
  pkg,
  filePaths,
  installCommandAction,
}: GetCommandOptions & {
  installCommandAction: InstallCommandAction;
}) {
  const errorTitle = `Install Error(${name})`;

  const { type, command } = installCommandAction;

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
        args: scripts.map(({ key, value }) => `scripts.${key}='${value}'`),
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
  uninstallCommandAction,
}: GetCommandOptions & {
  uninstallCommandAction: UninstallCommandAction;
}) {
  const errorTitle = `Uninstall Error(${name})`;

  const { type, command } = uninstallCommandAction;

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

async function getMarkdown(configs: Configs) {
  const sections: DataObject[] = [];
  const allInstallCommands: string[] = [];
  const allUninstallCommands: string[] = [];

  for (const config of configs) {
    const { name, url, pkg = {}, filePaths = [], install, uninstall } = config;
    const installCommands = install.map((item) =>
      getInstallCommand({ name, pkg, filePaths, installCommandAction: item }),
    ) as string[];
    const uninstallCommands = uninstall.map((item) =>
      getUninstallCommand({
        name,
        pkg,
        filePaths,
        uninstallCommandAction: item,
      }),
    ) as string[];

    const section: DataObject[] = [
      {
        h3: url ? `[${name}](${url})` : name,
      },
      {
        p: 'Install',
      },
      {
        code: {
          language: 'shell',
          content: installCommands.join('\n\n'),
        },
      },
      {
        p: 'Uninstall',
      },
      {
        code: {
          language: 'shell',
          content: uninstallCommands.join('\n\n'),
        },
      },
    ];
    sections.push(section);

    allInstallCommands.push(`# ${name}`, ...installCommands);
    allUninstallCommands.push(`# ${name}`, ...uninstallCommands);
  }

  const data = [
    { h1: 'Configs' },
    { h2: 'Table of Contents' },
    // single
    { h2: 'Sections' },
    ...sections,
    // all
    { h2: 'All' },
    { h3: 'Install' },
    {
      code: {
        language: 'shell',
        content: allInstallCommands.join('\n\n'),
      },
    },
    { h3: 'Uninstall' },
    {
      code: {
        language: 'shell',
        content: allUninstallCommands.join('\n\n'),
      },
    },
  ];

  const markdown = json2md(data);

  return await remark().use(remarkToc).process(markdown);
}

function writeMarkdown({
  fileName,
  content,
}: {
  content: string;
  fileName: string;
}) {
  const filePath = resolveCwd(fileName);
  fs.writeFile(filePath, content, (error) => {
    if (!error) {
      return;
    }
    console.error(error);
  });
}

export { getMarkdown, writeMarkdown };

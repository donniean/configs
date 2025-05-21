import fs from 'node:fs';

import type { DataObject } from 'json2md';
import json2md from 'json2md';
import { remark } from 'remark';
import remarkToc from 'remark-toc';

import { buildCommand } from '@/utils/commands';
import { resolveCwd } from '@/utils/paths';

import { CONFIG_BASE_URL } from './constants';
import type {
  CleanCommandAction,
  Config,
  Configs,
  SetupCommandAction,
} from './types';

type GetCommandOptions = Pick<Config, 'name' | 'pkg' | 'filePaths'>;

function getSetupCommand({
  name,
  pkg,
  filePaths,
  setupCommandAction,
}: GetCommandOptions & {
  setupCommandAction: SetupCommandAction;
}) {
  const errorTitle = `Setup Error(${name})`;

  const { type, command } = setupCommandAction;

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

function getCleanCommand({
  name,
  pkg,
  filePaths,
  cleanCommandAction,
}: GetCommandOptions & {
  cleanCommandAction: CleanCommandAction;
}) {
  const errorTitle = `Clean Error(${name})`;

  const { type, command } = cleanCommandAction;

  switch (type) {
    case 'pkg.devDependencies.delete': {
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
  const allSetupCommands: string[] = [];
  const allCleanCommands: string[] = [];

  for (const config of configs) {
    const { name, url, pkg = {}, filePaths = [], setup, clean } = config;
    const setupCommands = setup.map((item) =>
      getSetupCommand({ name, pkg, filePaths, setupCommandAction: item }),
    ) as string[];
    const cleanCommands = clean.map((item) =>
      getCleanCommand({
        name,
        pkg,
        filePaths,
        cleanCommandAction: item,
      }),
    ) as string[];

    const section: DataObject[] = [
      {
        h3: url ? `[${name}](${url})` : name,
      },
      {
        p: 'Setup',
      },
      {
        code: {
          language: 'shell',
          content: setupCommands.join('\n\n'),
        },
      },
      {
        p: 'Clean',
      },
      {
        code: {
          language: 'shell',
          content: cleanCommands.join('\n\n'),
        },
      },
    ];
    sections.push(section);

    allSetupCommands.push(`# ${name}`, ...setupCommands);
    allCleanCommands.push(`# ${name}`, ...cleanCommands);
  }

  const data = [
    { h1: 'Configs' },
    { h2: 'Table of Contents' },
    // single
    { h2: 'Tools' },
    ...sections,
    // all
    { h2: 'All' },
    { h3: 'Setup' },
    {
      code: {
        language: 'shell',
        content: allSetupCommands.join('\n\n'),
      },
    },
    { h3: 'Clean' },
    {
      code: {
        language: 'shell',
        content: allCleanCommands.join('\n\n'),
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

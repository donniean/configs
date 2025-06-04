import fs from 'node:fs';

import type { DataObject } from 'json2md';
import json2md from 'json2md';
import { remark } from 'remark';
import remarkToc from 'remark-toc';

import { CONFIGS } from '@/configs';
import { DEFAULT_OUTPUT_FILE_NAME } from '@/constants/configs';
import { buildCleanCommand, buildSetupCommand } from '@/helpers/commands';
import type { Configs } from '@/types/configs';
import { resolveCwd } from '@/utils/paths';

async function getMarkdown(configs: Configs) {
  const tools: DataObject[] = [];
  const allSetupCommands: string[] = [];
  const allCleanCommands: string[] = [];

  for (const config of configs) {
    const { name, url, pkg = {}, filePaths = [], setup, clean } = config;
    const setupCommands = setup.map((item) =>
      buildSetupCommand({ name, pkg, filePaths, setupCommandAction: item }),
    ) as string[];
    const cleanCommands = clean.map((item) =>
      buildCleanCommand({
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
    tools.push(section);

    allSetupCommands.push(`# ${name}`, ...setupCommands);
    allCleanCommands.push(`# ${name}`, ...cleanCommands);
  }

  const data = [
    { h1: '@donniean/node-app' },
    {
      p: '[![Version](https://img.shields.io/npm/v/@donniean/node-app.svg)](https://www.npmjs.com/package/@donniean/node-app) [![License: MIT](https://img.shields.io/github/license/donniean/node-app)](https://github.com/donniean/node-app/blob/master/LICENSE) [![CI](https://github.com/donniean/node-app/actions/workflows/ci.yaml/badge.svg)](https://github.com/donniean/node-app/actions/workflows/ci.yaml) [![Release](https://github.com/donniean/node-app/actions/workflows/release.yaml/badge.svg)](https://github.com/donniean/node-app/actions/workflows/release.yaml)',
    },
    { h2: 'Table of Contents' },
    // single
    { h2: 'Tools' },
    ...tools,
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

interface WriteMarkdownOptions {
  filePath: string;
  content: string;
}

function writeMarkdown({ filePath, content }: WriteMarkdownOptions) {
  fs.writeFile(filePath, content, (error) => {
    if (!error) {
      return;
    }
    console.error(error);
  });
}

async function writeMarkdownWithDefaults(options?: {
  filePath?: string | undefined;
}) {
  const filePath = options?.filePath ?? resolveCwd(DEFAULT_OUTPUT_FILE_NAME);
  const content = await getMarkdown(CONFIGS);
  writeMarkdown({ filePath, content: String(content) });
}

export { getMarkdown, writeMarkdown, writeMarkdownWithDefaults };

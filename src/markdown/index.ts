import { CONFIGS } from '@/configs';

import { getMarkdown, writeMarkdown } from './markdown';

const fileName =
  globalThis.process.env.npm_package_config_docsFilePath ?? 'README.md';
const content = await getMarkdown(CONFIGS);

writeMarkdown({ fileName, content: String(content) });

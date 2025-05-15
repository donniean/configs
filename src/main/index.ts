import { getMarkdown, writeMarkdown } from './app';
import { CONFIGS } from './configs';

const fileName =
  globalThis.process.env.npm_package_config_docsFilePath ?? 'README.md';
const content = await getMarkdown(CONFIGS);
writeMarkdown({ fileName, content: String(content) });

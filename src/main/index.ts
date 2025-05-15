import { getMarkdown, writeMarkdown } from './app';
import { CONFIGS } from './configs';
import { MARKDOWN_FILE_NAME } from './constants';

const content = await getMarkdown(CONFIGS);
writeMarkdown({ fileName: MARKDOWN_FILE_NAME, content: String(content) });

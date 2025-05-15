import { getMarkdown, writeMarkdownSync } from './app';
import { CONFIGS, MARKDOWN_FILE_NAME } from './constants';

const content = getMarkdown(CONFIGS);
writeMarkdownSync({ fileName: MARKDOWN_FILE_NAME, content });

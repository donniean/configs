import { getMarkdown, writeMarkdownSync } from './app';
import { CONFIGS } from './configs';
import { MARKDOWN_FILE_NAME } from './constants';

const content = getMarkdown(CONFIGS);
writeMarkdownSync({ fileName: MARKDOWN_FILE_NAME, content });

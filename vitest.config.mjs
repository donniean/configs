import path from 'node:path';
import { fileURLToPath } from 'node:url';

// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'vitest/config';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    alias: {
      '@': path.resolve(dirname, 'src'),
    },
  },
});

import path from 'node:path';

import { defineConfig } from 'vitest/config';

const { dirname } = import.meta;

export default defineConfig({
  test: {
    alias: {
      '@': path.resolve(dirname, 'src'),
    },
  },
});

import { defineConfig } from 'tsup';

export default defineConfig(({ watch }) => ({
  entry: {
    index: 'src/index.ts',
    cli: 'src/cli/index.ts',
  },
  minify: !watch,
  format: ['esm'],
  dts: true,
  sourcemap: true,
  replaceNodeEnv: true,
  clean: true,
}));

import type { Config } from '../types';

export const CONFIG = {
  value: 'stylelint',
  name: 'Stylelint',
  url: 'https://github.com/stylelint/stylelint',
  pkg: {
    devDependencies: [
      'stylelint',
      'stylelint-config-recess-order',
      'stylelint-config-standard',
      'stylelint-config-css-modules',
    ],
    scripts: [
      { key: 'lint:css', value: 'stylelint "**/*.css"' },
      { key: 'lint:css:fix', value: 'npm run lint:css -- --fix' },
    ],
  },
  filePaths: ['stylelint.config.mjs', '.stylelintignore'],
  setup: [
    { type: 'pkg.devDependencies.install' },
    { type: 'pkg.scripts.set' },
    { type: 'files.download' },
  ],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
    { type: 'files.delete' },
  ],
} as const satisfies Config;

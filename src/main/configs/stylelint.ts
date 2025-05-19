import type { Config } from '../types';

export const CONFIG = {
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
      { key: 'lint:css', value: String.raw`stylelint \"**/*.css\"` },
      { key: 'lint:css:fix', value: 'npm run lint:css -- --fix' },
    ],
  },
  filePaths: ['stylelint.config.mjs', '.stylelintignore'],
  install: [
    { type: 'pkg.devDependencies.install' },
    { type: 'pkg.scripts.set' },
    { type: 'files.download' },
  ],
  uninstall: [
    { type: 'pkg.devDependencies.uninstall' },
    { type: 'pkg.scripts.delete' },
    { type: 'files.delete' },
  ],
} as const satisfies Config;

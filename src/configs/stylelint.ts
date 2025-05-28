import type { Config } from '@/types/configs';

export const CONFIG = {
  key: 'stylelint',
  name: 'Stylelint',
  url: 'https://github.com/stylelint/stylelint',
  pkg: {
    devDependencies: [
      { packageName: 'stylelint' },
      { packageName: 'stylelint-config-recess-order' },
      { packageName: 'stylelint-config-standard' },
      { packageName: 'stylelint-config-css-modules' },
    ],
    scripts: [
      { key: 'lint:css', value: 'stylelint "**/*.css"' },
      { key: 'lint:css:fix', value: 'npm run lint:css -- --fix' },
    ],
  },
  filePaths: ['stylelint.config.mjs', '.stylelintignore'],
  setup: [
    { type: 'pkg.devDependencies.set' },
    { type: 'pkg.scripts.set' },
    { type: 'files.download' },
  ],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
    { type: 'files.delete' },
  ],
} as const satisfies Config;

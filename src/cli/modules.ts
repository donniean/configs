import { blue } from 'chalk';
import { get } from 'lodash';
import ora from 'ora';

const run = async (name, func) => {
  ora().info(blue(name));
  await func();
};

export default async ({ parsedConfig }) => {
  const { languages, modules } = parsedConfig;

  const js = get(languages, ['js', 0]);
  const jsx = get(languages, ['jsx', 0]);
  const css = get(languages, ['css', 0]);
  const scss = get(languages, ['scss', 0]);
  const less = get(languages, ['less', 0]);
  const html = get(languages, ['html', 0]);
  const json = get(languages, ['json', 0]);
  const yaml = get(languages, ['yaml', 0]);
  const md = get(languages, ['md', 0]);

  const editorconfig = get(modules, ['editorconfig', 0]);
  const prettier = get(modules, ['prettier', 0]);
  const eslint = get(modules, ['eslint', 0]);
  const stylelint = get(modules, ['stylelint', 0]);
  const htmlhint = get(modules, ['htmlhint', 0]);
  const cspell = get(modules, ['cspell', 0]);
  const commitlint = get(modules, ['commitlint', 0]);
  const lintStaged = get(modules, ['lint-staged', 0]);
  const husky = get(modules, ['husky', 0]);
  const gitignore = get(modules, ['gitignore', 0]);
  const gitattributes = get(modules, ['gitattributes', 0]);

  const styledComponents = get(modules, ['stylelint', 1, 'styled-components']);

  if (editorconfig) {
    // eslint-disable-next-line global-require
    await run('EditorConfig', require('../editorconfig'));
  }

  if (
    (js || jsx || css || scss || less || html || json || yaml || md) &&
    prettier
  ) {
    await run('Prettier', async () => {
      // eslint-disable-next-line global-require
      await require('../prettier')({ parsedConfig });
    });
  }

  if ((js || jsx) && eslint) {
    await run('ESLint', async () => {
      // eslint-disable-next-line global-require
      await require('../eslint')({ parsedConfig });
    });
  }

  if ((css || scss || less || ((js || jsx) && styledComponents)) && stylelint) {
    await run('stylelint', async () => {
      // eslint-disable-next-line global-require
      await require('../stylelint')({ parsedConfig });
    });
  }

  if (html && htmlhint) {
    // eslint-disable-next-line global-require
    await run('HTMLHint', require('../htmlhint'));
  }

  if (cspell) {
    // eslint-disable-next-line global-require
    await run('cspell', require('../cspell'));
  }

  if (commitlint) {
    // eslint-disable-next-line global-require
    await run('commitlint', require('../commitlint'));
    // eslint-disable-next-line global-require
    await run('Commitizen', require('../commitizen'));
  }

  if (lintStaged) {
    await run('lint-staged', async () => {
      // eslint-disable-next-line global-require
      await require('../lint-staged')({ parsedConfig });
    });
  }

  if (husky) {
    await run('Husky', async () => {
      // eslint-disable-next-line global-require
      await require('../husky')({ parsedConfig });
    });
  }

  if (gitignore) {
    // eslint-disable-next-line global-require
    await run('.gitignore', require('../gitignore'));
  }

  if (gitattributes) {
    // eslint-disable-next-line global-require
    await run('.gitattributes', require('../gitattributes'));
  }

  // eslint-disable-next-line global-require
  await run('sort package.json', require('../sort-package-json'));
};

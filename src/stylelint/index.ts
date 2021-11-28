import {get} from 'lodash';
import sortObject from 'sort-object-keys';
import {merge} from 'webpack-merge';

import baseConfig from '@/stylelint/rules/base';
import rationalOrderConfig from '@/stylelint/rules/rational-order';
import scssConfig from '@/stylelint/rules/scss';
import styledComponentsConfig from '@/stylelint/rules/styled-components';
import fileExtensions from '@/utils/file-extensions';
import {
  copyFilesToDestByTemplatesSync,
  writeObjectToDestModuleJSFileSync,
} from '@/utils/fs';
import * as packageJson from '@/utils/package-json';

const getPackages = ({hasScss, usePrettier, styledComponents}) => {
  let packages = [
    'stylelint',
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-order',
  ];

  if (hasScss) {
    packages = [...packages, 'stylelint-config-standard-scss'];
  }

  if (styledComponents) {
    packages = [...packages, 'stylelint-config-styled-components'];
  }

  if (usePrettier) {
    packages = [...packages, 'stylelint-config-prettier', 'stylelint-prettier'];
  }

  return packages;
};

const integratePrettier = ({config: c}) => {
  const {extends: extendsAlias = []} = c;
  extendsAlias.push('stylelint-prettier/recommended');
  return c;
};

export default async ({parsedConfig}) => {
  const hasScss = get(parsedConfig, ['languages', 'scss']);
  const styledComponents = get(parsedConfig, [
    'modules',
    'stylelint',
    1,
    'styled-components',
  ]);
  const usePrettier = get(parsedConfig, ['modules', 'prettier', 0]);

  const packageNames = getPackages({
    hasScss,
    usePrettier,
    styledComponents,
  });
  const fileName = '.stylelintrc.js';
  const fileNames = ['.stylelintignore'];
  const extensions = fileExtensions.getStylelint({
    parsedConfig,
    withGlobBraces: true,
  });

  await packageJson.mergeDevDependencies({packageNames});

  let config = baseConfig;
  if (hasScss) {
    config = merge({}, config, scssConfig);
  }
  if (styledComponents) {
    config = merge({}, config, styledComponentsConfig);
  }

  config = merge({}, config, rationalOrderConfig);
  config = integratePrettier({config});
  config = sortObject(config, ['plugins', 'extends', 'rules', 'overrides']);

  const data = JSON.stringify(config).replace(
    '"ignoreKeywords":[{}]',
    'ignoreKeywords: [/^[a-z]+[A-Z][a-z]*/]'
  );
  writeObjectToDestModuleJSFileSync({fileName, data});
  copyFilesToDestByTemplatesSync({modulePath: __dirname, fileNames});
  await packageJson.merge({
    data: {
      scripts: {
        stylelint: `npx stylelint --fix "**/*.${extensions}"`,
      },
    },
  });
};

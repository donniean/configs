const { get } = require('lodash');
const { merge } = require('webpack-merge');
const sortObject = require('sort-object-keys');

const packageJson = require('../utils/package-json');
const {
  copyFilesToDestByTemplatesSync,
  writeObjectToDestModuleJSFileSync,
} = require('../utils/fs');
const fileExtensions = require('../utils/file-extensions');
const baseConfig = require('./rules/base');
const scssConfig = require('./rules/scss');
const styledComponentsConfig = require('./rules/styled-components');
const wechatMiniprogramConfig = require('./rules/wechat-miniprogram');
const rationalOrderConfig = require('./rules/rational-order');

const getPackages = ({ hasScss, usePrettier, styledComponents }) => {
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

const integratePrettier = ({ config: c }) => {
  const { extends: extendsAlias = [] } = c;
  extendsAlias.push('stylelint-prettier/recommended');
  return c;
};

module.exports = async ({ parsedConfig }) => {
  const hasScss = get(parsedConfig, ['languages', 'scss']);
  const styledComponents = get(parsedConfig, [
    'modules',
    'stylelint',
    1,
    'styled-components',
  ]);
  const isWechatMiniprogram = get(parsedConfig, 'env') === 'wechat-miniprogram';
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

  await packageJson.mergeDevDependencies({ packageNames });

  let config = baseConfig;
  if (hasScss) {
    config = merge({}, config, scssConfig);
  }
  if (styledComponents) {
    config = merge({}, config, styledComponentsConfig);
  }
  if (isWechatMiniprogram) {
    config = merge({}, config, wechatMiniprogramConfig);
  }
  config = merge({}, config, rationalOrderConfig);
  config = integratePrettier({ config });
  config = sortObject(config, ['plugins', 'extends', 'rules', 'overrides']);

  const data = JSON.stringify(config).replace(
    '"ignoreKeywords":[{}]',
    'ignoreKeywords: [/^[a-z]+[A-Z][a-z]*/]'
  );
  writeObjectToDestModuleJSFileSync({ fileName, data });
  copyFilesToDestByTemplatesSync({ modulePath: __dirname, fileNames });
  await packageJson.merge({
    data: {
      scripts: {
        stylelint: `npx stylelint --fix "**/*.${extensions}"`,
      },
    },
  });
};

const { get, isEmpty } = require('lodash');
const { merge } = require('webpack-merge');

const { DEFAULT_ENV } = require('../constants/defaults');
const packageJson = require('../utils/package-json');
const {
  copyFilesToDestByTemplatesSync,
  writeObjectToDestModuleJSFileSync,
} = require('../utils/fs');
const fileExtensions = require('../utils/file-extensions');
const configs = require('./rules');

const getPreset = ({ parsedConfig }) => {
  const { languages = {}, env = DEFAULT_ENV } = parsedConfig;
  const jsx = get(languages, ['jsx', 0]);
  const vue = get(languages, ['vue', 0]);

  if (env === 'wechat-miniprogram') {
    return 'wechat-miniprogram';
  }

  if (env === 'es5') {
    return 'es5';
  }

  if (jsx) {
    return 'react';
  }

  if (vue) {
    return 'vue';
  }

  return 'es6';
};

const getPackages = ({
  preset,
  enableESLintPluginSimpleImportSort,
  usePrettier,
}) => {
  const base = ['eslint', 'eslint-plugin-html', 'eslint-plugin-import'];
  const es6 = [
    '@babel/core',
    '@babel/eslint-parser',
    'eslint-config-airbnb-base',
    'eslint-plugin-node',
  ];
  const es5 = [
    // 'eslint-plugin-es5',
    'eslint-config-airbnb-base',
  ];
  const react = [
    '@babel/core',
    '@babel/eslint-parser',
    'eslint-config-airbnb',
    'eslint-plugin-node',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'eslint-import-resolver-webpack',
  ];
  const vue = ['eslint-plugin-vue'];
  const wechatMiniprogram = [];
  const prettier = ['eslint-config-prettier', 'eslint-plugin-prettier'];
  const map = {
    es6: [...base, ...es6],
    es5: [...base, ...es5],
    react: [...base, ...react],
    vue: [...base, ...es6, ...vue],
    'wechat-miniprogram': [...base, ...es6, ...wechatMiniprogram],
  };
  let packages = map[preset];
  if (
    ['es6', 'react', 'vue'].includes(preset) &&
    enableESLintPluginSimpleImportSort
  ) {
    packages = [...packages, 'eslint-plugin-simple-import-sort'];
  }
  if (usePrettier) {
    packages = [...packages, ...prettier];
  }
  return packages;
};

const integratePrettier = ({ config }) => {
  const { extends: extendsAlias = [] } = config;
  extendsAlias.push('plugin:prettier/recommended');
  return config;
};

module.exports = async ({ parsedConfig }) => {
  const options = get(parsedConfig, ['modules', 'eslint', 1]);
  const eslintPluginSimpleImportSort = get(
    options,
    'eslint-plugin-simple-import-sort'
  );
  const useESLintPluginSimpleImportSort = get(eslintPluginSimpleImportSort, 0);
  const eslintPluginSimpleImportSortFiles = get(eslintPluginSimpleImportSort, [
    1,
    'files',
  ]);
  const enableESLintPluginSimpleImportSort =
    useESLintPluginSimpleImportSort &&
    !isEmpty(eslintPluginSimpleImportSortFiles);
  const usePrettier = get(parsedConfig, ['modules', 'prettier', 0]);

  const preset = getPreset({ parsedConfig });
  const packageNames = getPackages({
    preset,
    enableESLintPluginSimpleImportSort,
    usePrettier,
  });
  const fileName = '.eslintrc.js';
  const fileNames = ['.eslintignore'];
  const extensions = fileExtensions.getESLint({
    parsedConfig,
    withGlobBraces: true,
  });
  let config = configs[preset];

  await packageJson.mergeDevDependencies({ packageNames });
  if (enableESLintPluginSimpleImportSort) {
    config = merge({}, config, {
      plugins: ['simple-import-sort'],
      overrides: [
        {
          files: eslintPluginSimpleImportSortFiles.map(
            (file) => `${file}.${extensions}`
          ),
          rules: {
            'sort-imports': 'off',
            'import/order': 'off',
            'simple-import-sort/imports': [
              'error',
              {
                groups: [
                  ['^react', '^prop-types', '^@?\\w'],
                  [
                    '^(@/(constants|containers|components|routes|pages|hooks|contexts|api|services|utils))(/.*|$)',
                  ],
                  ['^\\.', '^\\u0000'],
                  [
                    '^(@/styles)(/.*|$)',
                    '^.+\\.module.s?css$',
                    '^.+\\.s?css$',
                    '^(@/assets)(/.*|$)',
                  ],
                ],
              },
            ],
          },
        },
      ],
    });
  }
  config = integratePrettier({ preset, config });
  writeObjectToDestModuleJSFileSync({ fileName, data: config });
  copyFilesToDestByTemplatesSync({ modulePath: __dirname, fileNames });
  await packageJson.merge({
    data: {
      scripts: {
        eslint: `npx eslint --fix "**/*.${extensions}"`,
      },
    },
  });
};

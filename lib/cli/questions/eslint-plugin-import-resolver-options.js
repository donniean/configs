const { get } = require('lodash');

const {
  DEFAULT_ESLINT_PLUGIN_IMPORT_RESOLVER_WEBPACK_CONFIG_FILE,
} = require('../../constants/defaults');

module.exports = ({ lastParsedConfig }) => [
  {
    type: 'input',
    name: 'eslint-plugin-import-resolver-webpack-config-file',
    message: `Input eslint-plugin-import settings['import/resolver'].webpack.config`,
    default() {
      const file = get(lastParsedConfig, [
        'modules',
        'eslint',
        1,
        'eslint-plugin-import',
        'resolver-webpack-config-file',
      ]);

      if (!file) {
        return DEFAULT_ESLINT_PLUGIN_IMPORT_RESOLVER_WEBPACK_CONFIG_FILE;
      }
      return file;
    },
    validate(value) {
      if (value.trim()) {
        return true;
      }
      return 'No Input';
    },
  },
];

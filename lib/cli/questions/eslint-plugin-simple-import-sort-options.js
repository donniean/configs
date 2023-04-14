const { get, isEmpty } = require('lodash');

const {
  DEFAULT_ESLINT_PLUGIN_SIMPLE_IMPORT_SORT_FILES,
} = require('../../constants/defaults');

module.exports = ({ lastParsedConfig }) => [
  {
    type: 'input',
    name: 'eslint-plugin-simple-import-sort-files',
    message:
      'Input eslint-plugin-simple-import-sort Overrides Files (without Extensions)',
    default() {
      const files = get(lastParsedConfig, [
        'modules',
        'eslint',
        1,
        'eslint-plugin-simple-import-sort',
        1,
        'files',
      ]);
      if (isEmpty(files)) {
        return DEFAULT_ESLINT_PLUGIN_SIMPLE_IMPORT_SORT_FILES.join(',');
      }
      if (Array.isArray(files)) {
        return files.join(',');
      }
      return files;
    },
    validate(value) {
      if (value.trim()) {
        return true;
      }
      return 'No Input';
    },
  },
];

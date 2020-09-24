const { get } = require('lodash');

const choices = [
  {
    name: 'Git',
    value: 'git',
  },
  {
    name: 'styled-components',
    value: 'styled-components',
  },
  {
    name: 'Private (package.json)',
    value: 'private-package',
  },
  {
    name: 'LICENSE (MIT)',
    value: 'license',
  },
];

module.exports = ({ lastParsedConfig }) => [
  {
    type: 'checkbox',
    name: 'options',
    message: 'Choose Options',
    choices() {
      return choices.map((item) => {
        const { value } = item;
        const checked = get(lastParsedConfig, ['options', value, 0]);
        return { ...item, checked };
      });
    },
    pageSize: 100,
    loop: false,
  },
];

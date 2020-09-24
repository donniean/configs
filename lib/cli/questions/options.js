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

module.exports = ({ lastParsedConfig, languages }) => [
  {
    type: 'checkbox',
    name: 'options',
    message: 'Choose Options',
    choices() {
      const { js, jsx, vue } = languages;
      return choices.map((item) => {
        const { value } = item;
        const disabled =
          ((!js && !jsx) || vue) && value === 'styled-components';
        const checked =
          get(lastParsedConfig, ['options', value, 0]) && !disabled;
        return { ...item, checked, disabled };
      });
    },
    pageSize: 100,
    loop: false,
  },
];

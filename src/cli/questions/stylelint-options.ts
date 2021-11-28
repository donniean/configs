import { get } from 'lodash';

const choices = [
  {
    name: 'styled-components',
    value: 'styled-components',
  },
];

export default ({ lastParsedConfig }) => [
  {
    type: 'checkbox',
    name: 'stylelint-options',
    message: 'Choose stylelint Options',
    choices() {
      return choices.map((item) => {
        const { value } = item;
        const checked = get(lastParsedConfig, [
          'modules',
          'stylelint',
          1,
          value,
        ]);
        return { ...item, checked };
      });
    },
    pageSize: 100,
  },
];

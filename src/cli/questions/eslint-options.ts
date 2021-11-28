import {get} from 'lodash';

const choices = [
  {
    name: 'eslint-plugin-simple-import-sort',
    value: 'eslint-plugin-simple-import-sort',
  },
];

export default ({lastParsedConfig}) => [
  {
    type: 'checkbox',
    name: 'eslint-options',
    message: 'Choose ESLint Options',
    choices() {
      return choices.map((item) => {
        const {value} = item;
        const checked = get(lastParsedConfig, [
          'modules',
          'eslint',
          1,
          value,
          0,
        ]);
        return {...item, checked};
      });
    },
    pageSize: 100,
  },
];

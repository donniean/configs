const choices = [
  {
    name: 'js',
    value: 'js',
  },
  {
    name: 'jsx',
    value: 'jsx',
  },
  {
    name: 'css',
    value: 'css',
  },
  {
    name: 'less',
    value: 'less',
  },
  {
    name: 'scss',
    value: 'scss',
  },
  {
    name: 'html',
    value: 'html',
  },
  {
    name: 'json',
    value: 'json',
  },
  {
    name: 'yaml',
    value: 'yaml',
  },
  {
    name: 'md',
    value: 'md',
  },
];

module.exports = ({ configParsed }) => [
  {
    type: 'checkbox',
    name: 'languages',
    message: 'Choose Languages',
    choices() {
      return choices.map((item) => {
        const { value } = item;
        const { languages = [] } = configParsed;
        const checked = languages.includes(value);
        return { ...item, checked };
      });
    },
    pageSize: 100,
    loop: false,
  },
];

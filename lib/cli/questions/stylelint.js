const choices = [
  {
    name: 'styled components',
    value: 'styled-components',
  },
];

module.exports = ({ configParsed }) => [
  {
    type: 'checkbox',
    name: 'stylelint',
    message: 'Choose stylelint',
    choices() {
      const { stylelint } = configParsed;
      const [, options = {}] = stylelint;
      return choices.map((item) => {
        const { value } = item;
        const v = options[value];
        return { ...item, checked: v };
      });
    },
  },
];

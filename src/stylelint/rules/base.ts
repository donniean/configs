export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'color-named': ['never', { ignore: ['inside-function'] }],
    'value-keyword-case': ['lower', { ignoreKeywords: [/^[a-z]+[A-Z][a-z]*/] }],
    'selector-list-comma-space-after': 'always-single-line',
    'no-unknown-animations': true,
  },
};

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  rules: {
    'color-hex-case': ['lower', { severity: 'warning' }],
    'color-named': [
      'never',
      { severity: 'warning', ignore: ['inside-function'] }
    ],
    'color-no-invalid-hex': true,
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-duplicate-names': true,
    'function-calc-no-unspaced-operator': [true, { severity: 'warning' }],
    'function-comma-space-after': ['always', { severity: 'warning' }],
    'function-comma-space-before': [
      'never-single-line',
      { severity: 'warning' }
    ],
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-name-case': 'lower',
    'function-parentheses-space-inside': [
      'never-single-line',
      { severity: 'warning' }
    ],
    'function-whitespace-after': ['always', { severity: 'warning' }],
    'number-no-trailing-zeros': [true, { severity: 'warning' }],
    'string-no-newline': true,
    'string-quotes': 'double',
    'length-zero-no-unit': [true, { severity: 'warning' }],
    'unit-case': 'lower',
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'value-keyword-case': 'lower',
    'value-list-comma-space-after': ['always', { severity: 'warning' }],
    'value-list-comma-space-before': [
      'never-single-line',
      { severity: 'warning' }
    ],
    'shorthand-property-no-redundant-values': [true, { severity: 'warning' }],
    'property-case': 'lower',
    'property-no-unknown': true,
    'property-no-vendor-prefix': [true, { severity: 'warning' }],
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-space-after': [
      'always-single-line',
      { severity: 'warning' }
    ],
    'declaration-colon-space-before': ['never', { severity: 'warning' }],
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': [
      true,
      { severity: 'warning' }
    ],
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': [
      'always',
      { severity: 'warning' }
    ],
    'declaration-block-trailing-semicolon': 'always',
    'block-closing-brace-newline-after': ['always', { severity: 'warning' }],
    'block-closing-brace-newline-before': ['always', { severity: 'warning' }],
    'block-no-empty': true,
    'selector-attribute-brackets-space-inside': [
      'never',
      { severity: 'warning' }
    ],
    'selector-attribute-operator-space-after': [
      'never',
      { severity: 'warning' }
    ],
    'selector-attribute-operator-space-before': [
      'never',
      { severity: 'warning' }
    ],
    'selector-attribute-quotes': ['always', { severity: 'warning' }],
    'selector-combinator-space-after': ['always', { severity: 'warning' }],
    'selector-combinator-space-before': ['always', { severity: 'warning' }],
    'selector-descendant-combinator-no-non-space': [
      true,
      { severity: 'warning' }
    ],
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-class-parentheses-space-inside': [
      'never',
      { severity: 'warning' }
    ],
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'selector-list-comma-space-after': [
      'always-single-line',
      { severity: 'warning' }
    ],
    'media-feature-colon-space-after': ['always', { severity: 'warning' }],
    'media-feature-colon-space-before': ['never', { severity: 'warning' }],
    'media-feature-name-case': 'lower',
    'media-feature-name-no-unknown': true,
    'media-feature-parentheses-space-inside': [
      'never',
      { severity: 'warning' }
    ],
    'at-rule-name-case': 'lower',
    'at-rule-no-unknown': true,
    'comment-no-empty': true,
    'comment-whitespace-inside': ['always', { severity: 'warning' }],
    indentation: 2,
    'no-descending-specificity': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-unknown-animations': true,
    'rule-empty-line-before': [
      'always',
      {
        severity: 'warning',
        except: ['after-single-line-comment', 'first-nested']
      }
    ]
  },
  ignoreFiles: [
    '**/.git/',
    '**/.svn/',
    '**/.hg/',
    '**/CVS/',
    '**/.DS_Store/',
    '**/node_modules/',
    '**/lib/',
    '**/libs/',
    '**/typings/',
    '**/jsconfig.json',
    '**/build/',
    '**/dist/',
    '**/*.min.*'
  ]
};

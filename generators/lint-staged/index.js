const Generator = require('yeoman-generator');

const {
  extendPackageJSON,
  extendDevDependencies
} = require('../../utils/package-json');
const { writeObjectModuleJS } = require('../../utils/fs');

function addHuskyToPackageJSON({ context, prettier, eslint, stylelint }) {
  if (prettier || eslint || stylelint) {
    extendPackageJSON({
      context,
      json: {
        husky: {
          hooks: {
            'pre-commit': 'lint-staged'
          }
        }
      }
    });
  }
}

function createFile({
  context,
  prettier,
  eslint,
  stylelint,
  styledComponents
}) {
  let config = {};

  if (prettier) {
    config['*.{js,jsx,html,vue,css,scss,json,md}'] = [
      'prettier --write',
      'git add'
    ];
  }

  if (eslint) {
    config['*.{js,jsx,html,vue}'] = ['eslint --fix', 'git add'];
  }

  if (stylelint && !styledComponents) {
    config['*.{css,scss,js,jsx,vue}'] = ['stylelint --fix', 'git add'];
  }

  writeObjectModuleJS({
    context,
    fileName: 'lint-staged.config.js',
    object: config
  });
}

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async writing() {
    const { promptValues } = this.config.getAll();
    const {
      configs: baseAnswers,
      stylelint: stylelintAnswers = []
    } = promptValues;
    const hasPrettier = baseAnswers.includes('prettier');
    const hasESLint = baseAnswers.includes('eslint');
    const hasStylelint = baseAnswers.includes('stylelint');
    const hasStyledComponents = stylelintAnswers.includes('styled-components');
    const packageNames = ['husky', 'lint-staged'];

    addHuskyToPackageJSON({
      context: this,
      prettier: hasPrettier,
      eslint: hasESLint,
      stylelint: hasStylelint
    });

    await extendDevDependencies({ context: this, packageNames });

    createFile({
      context: this,
      prettier: hasPrettier,
      eslint: hasESLint,
      stylelint: hasStylelint,
      styledComponents: hasStyledComponents
    });
  }
};

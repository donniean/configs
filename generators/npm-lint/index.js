const Generator = require('yeoman-generator');

const {
  getPackageJSON,
  extendPackageJSON,
} = require('../../utils/package-json');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  writing() {
    const { scripts } = getPackageJSON({ context: this });
    const array = Object.keys(scripts).filter((key) =>
      ['prettier', 'eslint', 'stylelint'].includes(key)
    );
    const script = array.map((item) => `npm run ${item}`).join(' && ');
    extendPackageJSON({
      context: this,
      json: {
        scripts: {
          lint: script,
        },
      },
    });
  }
};

const Generator = require('yeoman-generator');

const {
  extendDevDependencies,
  extendPackageJSON,
} = require('../utils/package-json');

module.exports = class extends Generator {
  async writing() {
    const packageNames = ['commitizen', 'cz-conventional-changelog'];
    await extendDevDependencies({ context: this, packageNames });
    extendPackageJSON({
      context: this,
      json: {
        scripts: {
          commit: 'git-cz',
        },
        config: {
          commitizen: {
            path: 'cz-conventional-changelog',
          },
        },
      },
    });
  }
};

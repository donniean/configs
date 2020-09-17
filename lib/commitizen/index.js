const packageJson = require('../utils/package-json');

module.exports = () => {
  const packageNames = ['commitizen', 'cz-conventional-changelog'];
  packageJson.mergeDevDependencies({ packageNames });
  packageJson.merge({
    data: {
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
};

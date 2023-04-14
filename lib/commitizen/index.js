const packageJson = require('../utils/package-json');

module.exports = async () => {
  const packageNames = ['commitizen', 'cz-conventional-changelog'];
  await packageJson.mergeDevDependencies({ packageNames });
  await packageJson.merge({
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

import * as packageJson from '@/utils/package-json';

export default async () => {
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

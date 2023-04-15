module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    // '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/exec',
      {
        prepareCmd: 'npx prettier --write "CHANGELOG.md"',
      },
    ],
    '@semantic-release/git',
  ],
};

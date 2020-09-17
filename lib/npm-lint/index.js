const packageJson = require('../utils/package-json');

module.exports = async () => {
  const { scripts } = packageJson.readSync();
  if (scripts) {
    const array = Object.keys(scripts).filter((key) =>
      ['prettier', 'eslint', 'stylelint'].includes(key)
    );
    const script = array.map((item) => `npm run ${item}`).join(' && ');
    await packageJson.merge({
      data: {
        scripts: {
          lint: script,
        },
      },
    });
  }
};

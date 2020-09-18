const packageJson = require('../utils/package-json');

module.exports = async () => {
  await packageJson.merge({
    data: {
      private: true,
    },
  });
};

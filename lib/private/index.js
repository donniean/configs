const packageJson = require('../utils/package-json');

module.exports = () => {
  packageJson.merge({
    data: {
      private: true,
    },
  });
};

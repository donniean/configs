function integratePrettier({ config }) {
  let { extends: extendsAlias = [] } = config;
  extendsAlias.push('stylelint-prettier/recommended');
  return config;
}

function getPackages({ prettier }) {
  let packages = ['stylelint', 'stylelint-config-standard'];
  if (prettier) {
    packages = [...packages, 'stylelint-config-prettier', 'stylelint-prettier'];
  }
  return packages;
}

module.exports = { integratePrettier, getPackages };

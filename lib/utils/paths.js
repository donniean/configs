const { resolve } = require('path');

const root = resolve(__dirname, '..', '..');
const lib = resolve(root, 'lib');
const dest = process.cwd();

const getTemplatesPath = (path) => resolve(lib, path, 'templates');

module.exports = {
  root,
  lib,
  dest,
  getTemplatesPath,
};

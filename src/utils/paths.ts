import { resolve } from 'node:path';

const root = resolve(__dirname, '..', '..');
const lib = resolve(root, 'lib');
const dest = process.cwd();
const packageJson = resolve(dest, 'package.json');

const getTemplatesPath = ({ modulePath }) => resolve(modulePath, 'templates');

const getTemplatesFilePath = ({ modulePath, fileName }) =>
  resolve(getTemplatesPath({ modulePath }), fileName);

const getDestFilePath = ({ filePath }) => resolve(dest, filePath);

export {
  root,
  lib,
  dest,
  packageJson,
  getTemplatesPath,
  getTemplatesFilePath,
  getDestFilePath,
};

import { resolve } from 'node:path';

const root = resolve(__dirname, '..', '..');
const lib = resolve(root, 'lib');
const dest = process.cwd();
const packageJson = resolve(dest, 'package.json');

const getTemplatesPath = ({ modulePath }: { modulePath: string }) =>
  resolve(modulePath, 'templates');

const getTemplatesFilePath = ({
  modulePath,
  fileName,
}: {
  modulePath: string;
  fileName: string;
}) => resolve(getTemplatesPath({ modulePath }), fileName);

const getDestFilePath = ({ filePath }: { filePath: string }) =>
  resolve(dest, filePath);

export {
  root,
  lib,
  dest,
  packageJson,
  getTemplatesPath,
  getTemplatesFilePath,
  getDestFilePath,
};

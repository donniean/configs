const SETUP_COMMAND_TYPES = [
  'pkg.devDependencies.set',
  'pkg.scripts.set',
  'files.download',
  'custom',
] as const;

const CLEAN_COMMAND_TYPE = [
  'pkg.devDependencies.delete',
  'pkg.scripts.delete',
  'files.delete',
  'custom',
] as const;

const CONFIG_BASE_URL =
  'https://raw.githubusercontent.com/donniean/react-app/main/';

const DEFAULT_OUTPUT_FILE_NAME =
  process.env.npm_package_config_docsFilePath ?? 'configs.md';

export {
  CLEAN_COMMAND_TYPE,
  CONFIG_BASE_URL,
  DEFAULT_OUTPUT_FILE_NAME,
  SETUP_COMMAND_TYPES,
};

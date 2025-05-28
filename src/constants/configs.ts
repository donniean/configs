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

export { CLEAN_COMMAND_TYPE, CONFIG_BASE_URL, SETUP_COMMAND_TYPES };

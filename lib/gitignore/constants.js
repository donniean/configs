const TEMPLATES = [
  'jetbrains',
  'macos',
  'node',
  'sass',
  /* cspell:disable-next-line */
  'visualstudiocode',
  'windows',
  'yarn',
];

const CUSTOM = [
  '.cache/',
  'build/',
  'miniprogram_npm/',
  '',
  '!.env',
  '!.env.*',
  '.env.local',
  '.env.*.local',
  '',
  'config/local.*',
  'config/local-*.*',
];

module.exports = { TEMPLATES, CUSTOM };

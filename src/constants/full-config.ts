const CONFIG = {
  modules: {
    editorconfig: true,
    prettier: {
      extensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'html',
        'vue',
        'hbs',
        'handlebars',
        'css',
        'less',
        'scss',
        'md',
        'mdx',
        'yaml',
      ],
      ignore: [],
    },
    eslint: {
      extensions: ['js', 'jsx', 'ts', 'tsx', 'html', 'vue'],
      presets: [],
      addons: {},
      ignore: [],
    },
    stylelint: {
      extensions: ['css', 'less', 'scss', 'js', 'jsx', 'ts', 'tsx'],
      ignore: [],
    },
    htmlhint: true,
    cspell: {
      extensions: ['*'],
      ignore: [],
    },
    commitlint: true,
    'lint-staged': {
      prettier: true,
      eslint: true,
      stylelint: true,
      cspell: true,
    },
    husky: true,
    gitignore: {
      custom: [
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
      ],
    },
    gitattributes: true,
  },
};

export default CONFIG;

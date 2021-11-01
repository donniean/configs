module.exports = {
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
      presets: ['node', 'es6', 'react', 'wechat-miniprogram'],
      addons: {
        'eslint-plugin-simple-import-sort': {
          files: ['./src/**'],
        },
        'eslint-import-resolver-webpack': {
          config: './webpack/webpack.config.dev.js',
        },
      },
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
    'private-package': false,
    license: {
      mit: {
        year: 2021,
        author: '',
      },
    },
  },
  ignore: [
    '**/.git/',
    '**/.svn/',
    '**/.DS_Store/',
    '**/.cache/',
    '**/node_modules/',
    '**/libs/',
    '**/build/',
    '**/dist/',
    '**/*.min.*',
  ],
};

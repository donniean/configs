export type PrettierExtension =
  | 'js'
  | 'jsx'
  | 'ts'
  | 'tsx'
  | 'mjs'
  | 'cjs'
  | 'json'
  | 'html'
  | 'vue'
  | 'hbs'
  | 'handlebars'
  | 'css'
  | 'less'
  | 'scss'
  | 'md'
  | 'mdx'
  | 'yaml'
  | 'yml';

export type ESLintExtension = 'js' | 'jsx' | 'ts' | 'tsx' | 'mjs' | 'cjs';

export interface Config {
  modules: {
    editorconfig: boolean;
    prettier: {
      extensions: PrettierExtension[];
      ignore: string[];
    };
    eslint: {
      extensions: ESLintExtension[];
      presets: [];
      ignore: [];
    };
    stylelint: {
      extensions: [];
      ignore: [];
    };
    htmlhint: true;
    cspell: {
      extensions: ['*'];
      ignore: [];
    };
    commitlint: true;
    'lint-staged': {
      prettier: true;
      eslint: true;
      stylelint: true;
      cspell: true;
    };
    husky: true;
    gitignore: true;
    gitattributes: true;
  };
  ignore: [];
}

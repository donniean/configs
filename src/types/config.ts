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

export type StylelintExtension =
  | 'css'
  | 'less'
  | 'scss'
  | 'js'
  | 'jsx'
  | 'ts'
  | 'tsx';

export type ESLintAddons = {
  node?: boolean;
};

export interface Config {
  modules?: {
    editorconfig?: boolean;
    prettier?: {
      extensions?: PrettierExtension[];
      ignore?: string[];
    };
    eslint?: {
      extensions?: ESLintExtension[];
      addons?: ESLintAddons;
      ignore?: string[];
    };
    stylelint?: {
      extensions?: StylelintExtension[];
      ignore?: string[];
    };
    htmlhint?: boolean;
    cspell?: {
      extensions?: ['*'];
      ignore?: string[];
    };
    commitizen?: boolean;
    commitlint?: boolean;
    'lint-staged'?: {
      prettier?: boolean;
      eslint?: boolean;
      tsc?: boolean;
      stylelint?: boolean;
      cspell?: boolean;
    };
    husky?: boolean;
    gitignore?: boolean;
    gitattributes?: boolean;
  };
  ignore?: string[];
}

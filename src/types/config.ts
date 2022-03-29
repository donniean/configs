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

export type StylelintAddons = {
  scss?: boolean;
  'css-in-js'?: boolean;
};

export interface Config {
  modules?: {
    commitizen?: boolean;
    commitlint?: boolean;
    cspell?:
      | false
      | {
          extensions?: ['*'];
          ignore?: string[];
        };
    editorconfig?: boolean;
    eslint?:
      | false
      | {
          extensions?: ESLintExtension[];
          addons?: ESLintAddons;
          ignore?: string[];
        };
    gitattributes?: boolean;
    gitignore?: boolean;
    htmlhint?: boolean;
    husky?: boolean;
    'lint-staged'?:
      | false
      | {
          prettier?: boolean;
          eslint?: boolean;
          tsc?: boolean;
          stylelint?: boolean;
          cspell?: boolean;
        };
    markdownlint?: boolean;
    prettier?:
      | false
      | {
          extensions?: PrettierExtension[];
          ignore?: string[];
        };
    stylelint?:
      | false
      | {
          extensions?: StylelintExtension[];
          addons?: StylelintAddons;
          ignore?: string[];
        };
  };
  ignore?: string[];
}

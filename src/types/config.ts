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
    gitignore?: boolean;
    gitattributes?: boolean;

    editorconfig?: boolean;
    prettier?:
      | false
      | {
          extensions?: PrettierExtension[];
        };
    eslint?:
      | false
      | {
          extensions?: ESLintExtension[];
          addons?: ESLintAddons;
        };
    stylelint?:
      | false
      | {
          extensions?: StylelintExtension[];
          addons?: StylelintAddons;
        };
    htmlhint?: boolean;
    markdownlint?: boolean;
    cspell?:
      | false
      | {
          extensions?: ['*'];
        };

    commitlint?: boolean;
    commitizen?: boolean;
    husky?: boolean;
    'lint-staged'?:
      | false
      | {
          prettier?: boolean;
          eslint?: boolean;
          tsc?: boolean;
          stylelint?: boolean;
          markdownlint?: boolean;
          cspell?: boolean;
        };
  };
}

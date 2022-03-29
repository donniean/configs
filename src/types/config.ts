type PrettierExtension =
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

type TscExtension = 'ts' | 'tsx';

type ESLintExtension = 'js' | 'jsx' | 'ts' | 'tsx' | 'mjs' | 'cjs';

type StylelintExtension = 'css' | 'less' | 'scss' | 'js' | 'jsx' | 'ts' | 'tsx';

type ESLintAddons = {
  node?: boolean;
};

type StylelintAddons = {
  scss?: boolean;
  'css-in-js'?: boolean;
};

interface Config {
  modules?: {
    gitignore?: boolean;
    gitattributes?: boolean;

    editorconfig?: boolean;
    prettier?:
      | false
      | {
          extensions?: PrettierExtension[];
        };
    tsc?:
      | false
      | {
          extensions?: TscExtension[];
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
          tsc?: boolean;
          eslint?: boolean;
          stylelint?: boolean;
          markdownlint?: boolean;
          cspell?: boolean;
        };
  };
}

// eslint-disable-next-line import/prefer-default-export
export type { Config };

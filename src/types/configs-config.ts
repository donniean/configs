import type {
  ESLintExtension,
  PrettierExtension,
  StylelintExtension,
  TscExtension,
} from './extensions';

export interface ConfigsConfig {
  features?: {
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
          options?: {
            node?: boolean;
          };
        };
    stylelint?:
      | false
      | {
          extensions?: StylelintExtension[];
          options?: {
            scss?: boolean;
            'css-in-js'?: boolean;
          };
        };
    htmlhint?: boolean;
    markdownlint?: boolean;
    cspell?:
      | false
      | {
          extensions?: string[];
        };
    commitlint?: boolean;
    commitizen?: boolean;
    'sort-package-json'?: boolean;
    'lint-staged'?: boolean;
    husky?: boolean;
  };
}

export interface ValidConfigsConfig {
  features?: {
    gitignore?: true;
    gitattributes?: true;
    editorconfig?: true;
    prettier?: {
      extensions?: PrettierExtension[];
    };
    tsc?: {
      extensions?: TscExtension[];
    };
    eslint?: {
      extensions?: ESLintExtension[];
      options?: {
        node?: true;
      };
    };
    stylelint?: {
      extensions?: StylelintExtension[];
      options?: {
        scss?: true;
        'css-in-js'?: true;
      };
    };
    htmlhint?: true;
    markdownlint?: true;
    cspell?: {
      extensions?: string[];
    };
    commitlint?: true;
    commitizen?: true;
    'sort-package-json'?: true;
    'lint-staged'?: true;
    husky?: true;
  };
}

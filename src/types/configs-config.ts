import type {
  ESLintExtension,
  PrettierExtension,
  StylelintExtension,
  TscExtension,
} from './extensions';

export type CustomIgnoreMethod = 'push' | 'unshift' | 'override';

export interface ConfigsConfig {
  features?: {
    gitignore?: boolean;
    gitattributes?: boolean;
    editorconfig?: boolean;
    prettier?:
      | false
      | {
          extensions?: PrettierExtension[];
          customIgnore?: string[]; // config only
          customIgnoreMethod?: CustomIgnoreMethod; // config only
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
        };
    htmlhint?: boolean;
    markdownlint?: boolean;
    cspell?:
      | false
      | {
          extensions?: string[];
          customIgnore?: string[]; // config only
          customIgnoreMethod?: CustomIgnoreMethod; // config only
        };
    commitlint?: boolean;
    commitizen?: boolean;
    'sort-package-json'?: boolean;
    'lint-staged'?: boolean;
    husky?: boolean;
  };
}

export interface NormalizedConfigsConfig {
  features?: {
    gitignore?: true;
    gitattributes?: true;
    editorconfig?: true;
    prettier?: {
      extensions?: PrettierExtension[];
      customIgnore?: string[];
      customIgnoreMethod?: CustomIgnoreMethod;
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
    };
    htmlhint?: true;
    markdownlint?: true;
    cspell?: {
      extensions?: string[];
      customIgnore?: string[];
      customIgnoreMethod?: CustomIgnoreMethod;
    };
    commitlint?: true;
    commitizen?: true;
    'sort-package-json'?: true;
    'lint-staged'?: true;
    husky?: true;
  };
}

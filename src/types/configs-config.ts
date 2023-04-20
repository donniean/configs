interface GitIgnoreOptions {
  ignorePatterns: string[];
  isDisableIgnorePresets?: boolean;
}

interface PatternsOptions {
  patterns: string[];
}

type LinterOptions = Partial<GitIgnoreOptions> & PatternsOptions;

interface StylelintOptions extends LinterOptions {
  scssPatterns?: string[];
  styledPatterns?: string[];
}

interface ESLintOptions extends LinterOptions {
  plugins?: {
    node?: boolean;
  };
}

export interface ConfigsConfig {
  features?: {
    gitignore?: boolean | GitIgnoreOptions;
    gitattributes?: boolean;
    editorconfig?: boolean;
    prettier?: false | LinterOptions;
    tsc?: false | PatternsOptions;
    eslint?: false | ESLintOptions;
    stylelint?: false | StylelintOptions;
    htmlhint?: false | LinterOptions;
    markdownlint?: false | LinterOptions;
    cspell?: false | LinterOptions;
    'sort-package-json'?: boolean | PatternsOptions;
    commitlint?: boolean;
    commitizen?: boolean;
    'lint-staged'?: boolean;
    husky?: boolean;
  };
}

export interface NormalizedConfigsConfig {
  features?: {
    gitignore?: Partial<GitIgnoreOptions>;
    gitattributes?: true;
    editorconfig?: true;
    prettier?: LinterOptions;
    tsc?: PatternsOptions;
    eslint?: ESLintOptions;
    stylelint?: StylelintOptions;
    htmlhint?: LinterOptions;
    markdownlint?: LinterOptions;
    cspell?: LinterOptions;
    'sort-package-json'?: PatternsOptions;
    commitlint?: true;
    commitizen?: true;
    'lint-staged'?: true;
    husky?: true;
  };
}

export type FeatureKey =
  | 'gitignore'
  | 'gitattributes'
  | 'editorconfig'
  | 'prettier'
  | 'tsc'
  | 'eslint'
  | 'stylelint'
  | 'htmlhint'
  | 'markdownlint'
  | 'cspell'
  | 'commitlint'
  | 'commitizen'
  | 'sort-package-json'
  | 'lint-staged'
  | 'husky';

export type ESLintOption = 'node';

export interface Option<T = string> {
  key: T;
  displayName: string;
}

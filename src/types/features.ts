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

export type HasPatternsFeatureKey = Extract<
  FeatureKey,
  | 'prettier'
  | 'tsc'
  | 'eslint'
  | 'stylelint'
  | 'htmlhint'
  | 'markdownlint'
  | 'cspell'
  | 'sort-package-json'
>;

export type HasIgnorePatternsFeatureKey = Extract<
  FeatureKey,
  | 'gitignore'
  | 'prettier'
  | 'eslint'
  | 'stylelint'
  | 'htmlhint'
  | 'markdownlint'
  | 'cspell'
>;

export type ESLintPlugin = 'node';

export interface Option<T = string> {
  key: T;
  displayName: string;
}

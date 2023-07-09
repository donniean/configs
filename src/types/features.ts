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
  | 'vitest'
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

export type HasLintStagedFeatureKey = Extract<
  FeatureKey,
  | 'sort-package-json'
  | 'prettier'
  | 'tsc'
  | 'eslint'
  | 'stylelint'
  | 'htmlhint'
  | 'markdownlint'
  | 'cspell'
  | 'vitest'
>;

export interface Option<T = string> {
  key: T;
  displayName: string;
}

export type FeatureKey =
  | 'gitignore'
  | 'gitattributes'
  | 'editorconfig'
  | 'prettier'
  | 'autocorrect'
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
  | 'husky'
  | 'npm-check-updates'
  | 'knip';

export type HasPatternsFeatureKey = Extract<
  FeatureKey,
  | 'prettier'
  | 'autocorrect'
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
  | 'autocorrect'
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
  | 'autocorrect'
  | 'tsc'
  | 'eslint'
  | 'stylelint'
  | 'htmlhint'
  | 'markdownlint'
  | 'cspell'
  | 'vitest'
>;

type HasNpmScriptsFeatureKey = Extract<
  FeatureKey,
  | 'prettier'
  | 'autocorrect'
  | 'tsc'
  | 'eslint'
  | 'stylelint'
  | 'htmlhint'
  | 'markdownlint'
  | 'cspell'
  | 'commitizen'
  | 'sort-package-json'
  | 'vitest'
  | 'lint-staged'
  | 'husky'
  | 'npm-check-updates'
  | 'knip'
>;

export type HasLintFeatureKey = Extract<
  HasNpmScriptsFeatureKey,
  | 'prettier'
  | 'autocorrect'
  | 'tsc'
  | 'eslint'
  | 'stylelint'
  | 'htmlhint'
  | 'markdownlint'
  | 'cspell'
  | 'sort-package-json'
>;

export interface Option<T = string> {
  key: T;
  displayName: string;
}

import { describe, expect, test } from 'vitest';

import { hasTypeScriptFn } from './utils';

describe('test hasTypeScriptFn', () => {
  const normalizedConfigsConfig = {
    features: {
      eslint: {
        patterns: [''],
      },
    },
  };

  test('js pattern', () => {
    normalizedConfigsConfig.features.eslint.patterns = ['**/*.js'];
    expect(hasTypeScriptFn(normalizedConfigsConfig)).toBe(false);
  });

  test('js and ts pattern', () => {
    normalizedConfigsConfig.features.eslint.patterns = ['**/*.{js,ts}'];
    expect(hasTypeScriptFn(normalizedConfigsConfig)).toBe(true);
  });

  test('js pattern and ts pattern', () => {
    normalizedConfigsConfig.features.eslint.patterns = ['**/*.js', '**/*.ts'];
    expect(hasTypeScriptFn(normalizedConfigsConfig)).toBe(true);
  });
});

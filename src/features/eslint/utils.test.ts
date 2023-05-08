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
  test('js and ts', () => {
    normalizedConfigsConfig.features.eslint.patterns = ['**/*.{js,ts}'];
    expect(hasTypeScriptFn(normalizedConfigsConfig)).toBe(true);
  });
});

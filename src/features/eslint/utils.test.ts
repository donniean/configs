import { describe, expect, test } from 'vitest';

import { hasNextFn, hasPrettierFn, hasReactFn, hasTypeScriptFn } from './utils';

describe('test hasTypeScriptFn', () => {
  test('no ESLint patterns', () => {
    const normalizedConfigsConfig = {
      features: {},
    };
    expect(hasTypeScriptFn(normalizedConfigsConfig)).toBe(false);
  });

  test('js pattern', () => {
    const normalizedConfigsConfig = {
      features: {
        eslint: {
          patterns: ['**/*.js'],
        },
      },
    };
    expect(hasTypeScriptFn(normalizedConfigsConfig)).toBe(false);
  });

  test('js and ts pattern', () => {
    const normalizedConfigsConfig = {
      features: {
        eslint: {
          patterns: ['**/*.{js,ts}'],
        },
      },
    };
    expect(hasTypeScriptFn(normalizedConfigsConfig)).toBe(true);
  });

  test('js pattern and ts pattern', () => {
    const normalizedConfigsConfig = {
      features: {
        eslint: {
          patterns: ['**/*.js', '**/*.ts'],
        },
      },
    };
    expect(hasTypeScriptFn(normalizedConfigsConfig)).toBe(true);
  });
});

describe('test hasReactFn', () => {
  test('no ESLint patterns', () => {
    const normalizedConfigsConfig = {
      features: {},
    };
    expect(hasReactFn(normalizedConfigsConfig)).toBe(false);
  });

  test('js pattern', () => {
    const normalizedConfigsConfig = {
      features: {
        eslint: {
          patterns: ['**/*.js'],
        },
      },
    };
    expect(hasReactFn(normalizedConfigsConfig)).toBe(false);
  });

  test('js and ts pattern', () => {
    const normalizedConfigsConfig = {
      features: {
        eslint: {
          patterns: ['**/*.{js,ts}'],
        },
      },
    };
    expect(hasReactFn(normalizedConfigsConfig)).toBe(false);
  });

  test('js and jsx pattern', () => {
    const normalizedConfigsConfig = {
      features: {
        eslint: {
          patterns: ['**/*.{js,jsx}'],
        },
      },
    };
    expect(hasReactFn(normalizedConfigsConfig)).toBe(true);
  });

  test('ts and tsx pattern', () => {
    const normalizedConfigsConfig = {
      features: {
        eslint: {
          patterns: ['**/*.{ts,tsx}'],
        },
      },
    };
    expect(hasReactFn(normalizedConfigsConfig)).toBe(true);
  });
});

describe('test hasNextFn', () => {
  test('no next', () => {
    const normalizedConfigsConfig = {
      features: {},
    };
    expect(hasNextFn(normalizedConfigsConfig)).toBe(false);
  });

  test('next is true', () => {
    const normalizedConfigsConfig = {
      features: {
        eslint: {
          patterns: ['**/*.jsx'],
          next: true,
        },
      },
    };
    expect(hasNextFn(normalizedConfigsConfig)).toBe(true);
  });
});

describe('test hasPrettierFn', () => {
  test('no Prettier patterns', () => {
    const normalizedConfigsConfig = {
      features: {},
    };
    expect(hasPrettierFn(normalizedConfigsConfig)).toBe(false);
  });

  test('has patterns', () => {
    const normalizedConfigsConfig = {
      features: {
        prettier: {
          patterns: ['**'],
        },
      },
    };
    expect(hasPrettierFn(normalizedConfigsConfig)).toBe(true);
  });
});

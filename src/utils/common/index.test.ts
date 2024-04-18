import { describe, expect, test } from 'vitest';

import { deepTrim } from './index';

describe('test deepTrim', () => {
  test('base', () => {
    expect(deepTrim({ a: 'a ', b: ' b', c: 1 })).toStrictEqual({
      a: 'a',
      b: 'b',
      c: 1,
    });
  });
  test('recursion', () => {
    expect(
      deepTrim({ a: { aa: 'aa ' }, b: { bb: { bbb: ' bbb' } } }),
    ).toStrictEqual({ a: { aa: 'aa' }, b: { bb: { bbb: 'bbb' } } });
  });
});

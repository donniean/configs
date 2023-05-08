import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { describe, expect, test } from 'vitest';

import { resolveAssets } from './index';

const dirname = path.dirname(fileURLToPath(import.meta.url));

describe('test resolveAssets', () => {
  test('test resolveAssets', () => {
    expect(resolveAssets('prettier', 'a', 'b')).toBe(
      path.resolve(dirname, '..', '..', '..', 'assets', 'prettier', 'a', 'b')
    );
  });
});

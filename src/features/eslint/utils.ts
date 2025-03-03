import micromatch from 'micromatch';

import type { NormalizedConfigsConfig } from '@/types/configs-config';

function hasTypeScriptFn(normalizedConfigsConfig: NormalizedConfigsConfig) {
  const patterns = normalizedConfigsConfig.features?.eslint?.patterns ?? [];
  return micromatch.some(['index.ts', 'index.tsx'], patterns);
}

function hasReactFn(normalizedConfigsConfig: NormalizedConfigsConfig) {
  const patterns = normalizedConfigsConfig.features?.eslint?.patterns ?? [];
  return micromatch.some(['index.jsx', 'index.tsx'], patterns);
}

function hasNextFn(normalizedConfigsConfig: NormalizedConfigsConfig) {
  return Boolean(normalizedConfigsConfig.features?.eslint?.next);
}

function hasNodeFn(normalizedConfigsConfig: NormalizedConfigsConfig) {
  const patterns = normalizedConfigsConfig.features?.eslint?.nodePatterns ?? [];
  return patterns.length > 0;
}

function hasVitestFn(normalizedConfigsConfig: NormalizedConfigsConfig) {
  const patterns =
    normalizedConfigsConfig.features?.eslint?.vitestPatterns ?? [];
  return patterns.length > 0;
}

function hasPrettierFn(normalizedConfigsConfig: NormalizedConfigsConfig) {
  const patterns = normalizedConfigsConfig.features?.prettier?.patterns ?? [];
  return patterns.length > 0;
}

export {
  hasNextFn,
  hasNodeFn,
  hasPrettierFn,
  hasReactFn,
  hasTypeScriptFn,
  hasVitestFn,
};

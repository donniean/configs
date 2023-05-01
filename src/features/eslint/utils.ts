import micromatch from 'micromatch';

import type { NormalizedConfigsConfig } from '@/types/configs-config';
import { requireRoot } from '@/utils/paths';

import type { ESLintConfig } from './types';

function requireConfig(path: string) {
  return requireRoot<ESLintConfig>(`./node_modules/${path}`);
}

function requireAirbnbBaseRules(fileName: string) {
  return requireConfig(`eslint-config-airbnb-base/rules/${fileName}.js`);
}

const airbnbBase = {
  imports: requireAirbnbBaseRules('imports'),
  bestPractices: requireAirbnbBaseRules('best-practices'),
};

function hasTypeScriptFn(normalizedConfigsConfig: NormalizedConfigsConfig) {
  const patterns = normalizedConfigsConfig.features?.eslint?.patterns ?? [];
  return micromatch.some(
    ['index.ts', 'index.tsx', 'index.mts', 'index.cts'],
    patterns
  );
}

function hasReactFn(normalizedConfigsConfig: NormalizedConfigsConfig) {
  const patterns = normalizedConfigsConfig.features?.eslint?.patterns ?? [];
  return micromatch.some(['index.jsx', 'index.tsx'], patterns);
}

function hasPrettierFn(normalizedConfigsConfig: NormalizedConfigsConfig) {
  const patterns = normalizedConfigsConfig.features?.prettier?.patterns ?? [];
  return patterns.length > 0;
}

export { airbnbBase, hasPrettierFn, hasReactFn, hasTypeScriptFn };

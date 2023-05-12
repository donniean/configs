import cleanDeep from 'clean-deep';
import { uniq } from 'lodash-es';
import micromatch from 'micromatch';
import sortObjectKeys from 'sort-object-keys';

import type { NormalizedConfigsConfig } from '@/types/configs-config';
import { requireRoot } from '@/utils/paths';

import { SORT_ESLINT_CONFIG_KEYS } from './constants';
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
  return micromatch.some(['index.ts', 'index.tsx'], patterns);
}

function hasReactFn(normalizedConfigsConfig: NormalizedConfigsConfig) {
  const patterns = normalizedConfigsConfig.features?.eslint?.patterns ?? [];
  return micromatch.some(['index.jsx', 'index.tsx'], patterns);
}

function hasNodeFn(normalizedConfigsConfig: NormalizedConfigsConfig) {
  const patterns = normalizedConfigsConfig.features?.eslint?.nodePatterns ?? [];
  return patterns.length > 0;
}

function hasPrettierFn(normalizedConfigsConfig: NormalizedConfigsConfig) {
  const patterns = normalizedConfigsConfig.features?.prettier?.patterns ?? [];
  return patterns.length > 0;
}

function sortExtends(data: ESLintConfig['extends']) {
  if (Array.isArray(data)) {
    data.sort((a, b) => {
      if (a === 'prettier') {
        return 1;
      }

      const allExtends = [
        'airbnb-base',
        'airbnb',
        'airbnb/hooks',
        'plugin:react/jsx-runtime',
        'plugin:eslint-comments/recommended',
        'plugin:promise/recommended',
        'plugin:unicorn/recommended',
        'plugin:sonarjs/recommended',
        'plugin:n/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript/base',
        'airbnb-typescript',
        'prettier',
      ];

      const aIndex = allExtends.indexOf(a);
      const bIndex = allExtends.indexOf(b);
      return aIndex - bIndex;
    });
    return uniq(data);
  }

  return data;
}

function sortPlugins(data: ESLintConfig['plugins']) {
  return uniq(data);
}

function sortRules(data: ESLintConfig['rules']) {
  return data;
}

function sortESLintConfig(config: ESLintConfig) {
  const { extends: extendsShadow, plugins, rules, ...rest } = config;
  const sortedExtends = sortExtends(extendsShadow);
  const sortedPlugins = sortPlugins(plugins);
  const sortedRules = sortRules(rules);
  const newConfig = cleanDeep({
    extends: sortedExtends,
    plugins: sortedPlugins,
    rules: sortedRules,
    ...rest,
  });
  return sortObjectKeys(newConfig, SORT_ESLINT_CONFIG_KEYS);
}

export {
  airbnbBase,
  hasNodeFn,
  hasPrettierFn,
  hasReactFn,
  hasTypeScriptFn,
  sortESLintConfig,
};

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

export { airbnbBase };

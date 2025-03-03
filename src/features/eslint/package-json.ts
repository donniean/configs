import type {
  FeaturePackageJson,
  GetPackageJsonOptions,
} from '@/types/feature-configs';
import { getPatternsString } from '@/utils/misc';

/* import * as base from './rules/base';
import * as next from './rules/next';
import * as node from './rules/node';
import * as prettier from './rules/prettier';
import * as react from './rules/react';
import * as typescript from './rules/typescript';
import * as vitest from './rules/vitest';
import {
  hasNextFn,
  hasNodeFn,
  hasPrettierFn,
  hasReactFn,
  hasTypeScriptFn,
  hasVitestFn,
} from './utils'; */

/* function getDevDependencies(
  normalizedConfigsConfig: GetPackageJsonOptions['normalizedConfigsConfig'],
) {
  const hasPrettier = hasPrettierFn(normalizedConfigsConfig);
  const hasTypeScript = hasTypeScriptFn(normalizedConfigsConfig);
  const hasReact = hasReactFn(normalizedConfigsConfig);
  const hasNext = hasNextFn(normalizedConfigsConfig);
  const hasNode = hasNodeFn(normalizedConfigsConfig);
  const hasVitest = hasVitestFn(normalizedConfigsConfig);

  const baseDevDependencies = base.getDevDependencies();
  const prettierDevDependencies = prettier.getDevDependencies();
  const typescriptDevDependencies = typescript.getDevDependencies();
  const reactDevDependencies = react.getDevDependencies();
  const nextDevDependencies = next.getDevDependencies();
  const nodeDevDependencies = node.getDevDependencies();
  const vitestDevDependencies = vitest.getDevDependencies();

  const finalPrettierDevDependencies = hasPrettier
    ? prettierDevDependencies
    : null;
  const finalTypeScriptDevDependencies = hasTypeScript
    ? typescriptDevDependencies
    : null;
  const finalReactDevDependencies = hasReact ? reactDevDependencies : null;
  const finalNextDevDependencies = hasNext ? nextDevDependencies : null;
  const finalNodeDevDependencies = hasNode ? nodeDevDependencies : null;
  const finalVitestDevDependencies = hasVitest ? vitestDevDependencies : null;

  return {
    ...baseDevDependencies,
    ...finalPrettierDevDependencies,
    ...finalTypeScriptDevDependencies,
    ...finalReactDevDependencies,
    ...finalNextDevDependencies,
    ...finalNodeDevDependencies,
    ...finalVitestDevDependencies,
  };
} */

export function getPackageJson({
  normalizedConfigsConfig,
}: GetPackageJsonOptions): FeaturePackageJson {
  const patterns = normalizedConfigsConfig.features?.eslint?.patterns ?? [];
  const patternsString = getPatternsString(patterns);
  // const devDependencies = getDevDependencies(normalizedConfigsConfig);

  return {
    scripts: {
      'lint:eslint': `eslint ${patternsString}`,
      'lint:eslint:fix': `npm run lint:eslint -- --fix`,
    },
    // devDependencies,
  };
}

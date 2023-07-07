import type {
  FeaturePackageJson,
  GetPackageJsonOptions,
} from '@/types/feature-configs';
import { getPatternsString } from '@/utils/misc';

import * as base from './rules/base';
import * as node from './rules/node';
import * as prettier from './rules/prettier';
import * as react from './rules/react';
import * as typescript from './rules/typescript';
import { hasNodeFn, hasPrettierFn, hasReactFn, hasTypeScriptFn } from './utils';

function getDevDependencies(
  normalizedConfigsConfig: GetPackageJsonOptions['normalizedConfigsConfig'],
) {
  const hasPrettier = hasPrettierFn(normalizedConfigsConfig);
  const hasTypeScript = hasTypeScriptFn(normalizedConfigsConfig);
  const hasReact = hasReactFn(normalizedConfigsConfig);
  const hasNode = hasNodeFn(normalizedConfigsConfig);

  const baseDevDependencies = base.getDevDependencies({ hasReact });
  const prettierDevDependencies = prettier.getDevDependencies();
  const typescriptDevDependencies = typescript.getDevDependencies();
  const reactDevDependencies = react.getDevDependencies();
  const nodeDevDependencies = node.getDevDependencies();

  const finalPrettierDevDependencies = hasPrettier
    ? prettierDevDependencies
    : null;
  const finalTypeScriptDevDependencies = hasTypeScript
    ? typescriptDevDependencies
    : null;
  const finalReactDevDependencies = hasReact ? reactDevDependencies : null;
  const finalNodeDevDependencies = hasNode ? nodeDevDependencies : null;

  return {
    ...baseDevDependencies,
    ...finalPrettierDevDependencies,
    ...finalTypeScriptDevDependencies,
    ...finalReactDevDependencies,
    ...finalNodeDevDependencies,
  };
}

export function getPackageJson({
  normalizedConfigsConfig,
}: GetPackageJsonOptions): FeaturePackageJson {
  const patterns = normalizedConfigsConfig.features?.eslint?.patterns ?? [];
  const patternsString = getPatternsString(patterns);
  const devDependencies = getDevDependencies(normalizedConfigsConfig);

  return {
    scripts: {
      'lint:eslint': `eslint ${patternsString}`,
      'lint:eslint:fix': `eslint --fix ${patternsString}`,
    },
    devDependencies,
  };
}

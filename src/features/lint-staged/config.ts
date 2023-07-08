import { isEmpty, uniq } from 'lodash-es';
import parseGlob from 'parse-glob';

import type { FeatureConfig, GetConfigOptions } from '@/types/feature-configs';
import type { HasPatternsFeatureKey } from '@/types/features';

const COMMANDS = {
  'sort-package-json': 'sort-package-json',
  prettier: 'prettier --write --ignore-unknown',
  tsc: 'bash -c tsc --noEmit',
  eslint: 'eslint --fix',
  stylelint: 'stylelint --fix',
  htmlhint: 'htmlhint',
  markdownlint: 'markdownlint --dot --fix',
  cspell:
    'cspell lint --no-progress --relative --no-must-find-files --dot --gitignore',
} as const;

function addCommand({
  data,
  pattern,
  command,
}: {
  data: Record<string, string | string[]>;
  pattern: string;
  command: string;
}) {
  const result = { ...data };
  const currentCommand = result[pattern];

  if (isEmpty(currentCommand)) {
    result[pattern] = command;
    return result;
  }

  if (Array.isArray(currentCommand)) {
    currentCommand.push(command);
    return result;
  }

  if (typeof currentCommand === 'string') {
    result[pattern] = [currentCommand, command];
  }

  return result;
}

function getData(
  normalizedConfigsConfig: GetConfigOptions['normalizedConfigsConfig'],
) {
  const { features } = normalizedConfigsConfig;
  let data: Record<string, string | string[]> = {};

  Object.entries(COMMANDS).forEach(([featureKey, command]) => {
    const key = featureKey as HasPatternsFeatureKey;
    const feature = features?.[key];
    if (feature) {
      const { patterns } = feature;
      if (key === 'sort-package-json') {
        const basenameList = patterns.map(pattern => {
          const { path } = parseGlob(pattern);
          return path.basename;
        });
        uniq(basenameList).forEach(basename => {
          data = addCommand({ data, pattern: basename, command });
        });
      } else {
        patterns.forEach(pattern => {
          const { path } = parseGlob(pattern);
          data = addCommand({ data, pattern: `*${path.extname}`, command });
        });
      }
    }
  });

  return data;
}

export function getConfig({
  normalizedConfigsConfig,
}: GetConfigOptions): FeatureConfig<Record<string, string | string[]>> {
  const data = getData(normalizedConfigsConfig);

  return {
    outputFileName: 'lint-staged.config.mjs',
    format: 'esm',
    data,
  };
}

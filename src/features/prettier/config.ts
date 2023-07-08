import { omit } from 'lodash-es';

import type { JsonObject } from '@/types/base';
import type { FeatureConfig, GetConfigOptions } from '@/types/feature-configs';

const FULL_CONFIG = {
  // printWidth: 80,
  singleQuote: true,
  arrowParens: 'avoid',
  // plugins: ['prettier-plugin-tailwindcss'],
};

export function getConfig({
  normalizedConfigsConfig,
}: GetConfigOptions): FeatureConfig<JsonObject> {
  const hasTailwindcss =
    normalizedConfigsConfig.features?.prettier?.tailwindcss;
  const data = hasTailwindcss ? FULL_CONFIG : omit(FULL_CONFIG, 'plugins[0]');

  return {
    outputFileName: 'prettier.config.cjs',
    format: 'cjs',
    data,
  };
}

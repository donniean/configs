import type { JsonObject } from '@/types/base';
import type { FeatureConfig, GetConfigOptions } from '@/types/feature-configs';

const BASE_CONFIG = {
  // printWidth: 80,
  singleQuote: true,
};

const TAILWINDCSS_CONFIG = {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx'],
};

export function getConfig({
  normalizedConfigsConfig,
}: GetConfigOptions): FeatureConfig<JsonObject> {
  const hasTailwindcss =
    normalizedConfigsConfig.features?.prettier?.tailwindcss;
  const data = hasTailwindcss
    ? { ...BASE_CONFIG, ...TAILWINDCSS_CONFIG }
    : BASE_CONFIG;

  return {
    outputFileName: 'prettier.config.mjs',
    format: 'esm',
    data,
  };
}

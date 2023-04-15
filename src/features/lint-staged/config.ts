import type { FeatureConfig, GetConfigOptions } from '@/types/feature-configs';
import type { GetFeatureGlobExtensionsOptions } from '@/utils/features';
import { getFeatureGlobExtensions } from '@/utils/features';
import { getGlobExtensions } from '@/utils/misc';

type GlobExtensionsFeatureKey = GetFeatureGlobExtensionsOptions['featureKey'];

function getAllCommands({
  prettierGlobExtensions,
  tscGlobExtensions,
  eslintGlobExtensions,
  stylelintGlobExtensions,
  cspellPattern,
}: {
  prettierGlobExtensions: string;
  tscGlobExtensions: string;
  eslintGlobExtensions: string;
  stylelintGlobExtensions: string;
  cspellPattern: string;
}) {
  return {
    'sort-package-json': {
      'package.json': 'sort-package-json',
    },
    prettier: {
      [`*.${prettierGlobExtensions}`]: 'prettier --write',
    },
    tsc: {
      [`*.${tscGlobExtensions}`]: 'bash -c tsc --noEmit',
    },
    eslint: {
      [`*.${eslintGlobExtensions}`]: 'eslint --fix',
    },
    stylelint: {
      [`*.${stylelintGlobExtensions}`]: 'stylelint --fix',
    },
    htmlhint: {
      '*.html': 'htmlhint',
    },
    markdownlint: {
      '*.md': 'markdownlint --fix',
    },
    cspell: {
      [`${cspellPattern}`]: 'cspell --no-must-find-files',
    },
  };
}

function getCSpellPattern(
  normalizedConfigsConfig: GetConfigOptions['normalizedConfigsConfig']
) {
  const extensions = normalizedConfigsConfig.features?.cspell?.extensions ?? [];

  if (extensions.length === 0) {
    return '';
  }

  return extensions.length === 1 && extensions[0] === '**'
    ? '**'
    : `*.${getGlobExtensions(extensions)}`;
}

function getData(
  normalizedConfigsConfig: GetConfigOptions['normalizedConfigsConfig']
) {
  const getExtensions = (featureKey: GlobExtensionsFeatureKey) =>
    getFeatureGlobExtensions({
      featureKey,
      normalizedConfigsConfig,
    });
  const checkers = {
    prettier: getExtensions('prettier'),
    tsc: getExtensions('tsc'),
    eslint: getExtensions('eslint'),
    stylelint: getExtensions('stylelint'),
    cspell: getCSpellPattern(normalizedConfigsConfig),
  };
  const allCommands = getAllCommands({
    prettierGlobExtensions: checkers.prettier,
    tscGlobExtensions: checkers.tsc,
    eslintGlobExtensions: checkers.eslint,
    stylelintGlobExtensions: checkers.stylelint,
    cspellPattern: checkers.cspell,
  });

  let result: Record<string, string> = {};
  const checkerFeatureKeys = Object.keys(checkers);
  Object.entries(allCommands).forEach(([featureKey, command]) => {
    const key = featureKey as GlobExtensionsFeatureKey;
    if (checkerFeatureKeys.includes(key)) {
      if (checkers[key]) {
        result = { ...result, ...command };
      }
    } else if (normalizedConfigsConfig.features?.[key]) {
      result = { ...result, ...command };
    }
  });
  return result;
}

export function getConfig({
  normalizedConfigsConfig,
}: GetConfigOptions): FeatureConfig<Record<string, string>> {
  const data = getData(normalizedConfigsConfig);
  return {
    outputFileName: 'lint-staged.config.cjs',
    format: 'cjs',
    data,
  };
}

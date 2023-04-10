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
  validConfigsConfig: GetConfigOptions['validConfigsConfig']
) {
  const extensions = validConfigsConfig.features?.cspell?.extensions ?? [];

  if (extensions.length === 0) {
    return '';
  }

  return extensions.length === 1 && extensions[0] === '**'
    ? '**'
    : `*.${getGlobExtensions(extensions)}`;
}

function getData(validConfigsConfig: GetConfigOptions['validConfigsConfig']) {
  const getExtensions = (featureKey: GlobExtensionsFeatureKey) =>
    getFeatureGlobExtensions({
      validConfigsConfig,
      featureKey,
    });
  const checkers = {
    prettier: getExtensions('prettier'),
    tsc: getExtensions('tsc'),
    eslint: getExtensions('eslint'),
    stylelint: getExtensions('stylelint'),
    cspell: getCSpellPattern(validConfigsConfig),
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
  const options = validConfigsConfig.features?.['lint-staged']?.options;
  Object.entries(allCommands).forEach(([featureKey, command]) => {
    const key = featureKey as GlobExtensionsFeatureKey;
    if (options?.[key]) {
      if (checkerFeatureKeys.includes(key)) {
        if (checkers[key]) {
          result = { ...result, ...command };
        }
      } else if (validConfigsConfig.features?.[key]) {
        result = { ...result, ...command };
      }
    }
  });
  return result;
}

export function getConfig({
  validConfigsConfig,
}: GetConfigOptions): FeatureConfig<Record<string, string>> {
  const data = getData(validConfigsConfig);
  return {
    outputFileName: 'lint-staged.config.cjs',
    format: 'cjs',
    data,
  };
}

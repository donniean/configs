import type {
  FeaturePackageJson,
  GetPackageJsonOptions,
} from '@/types/feature-configs';
import { getGlobExtensions } from '@/utils/misc';

function getScripts(
  normalizedConfigsConfig: GetPackageJsonOptions['normalizedConfigsConfig']
) {
  const extensions = normalizedConfigsConfig.features?.cspell?.extensions ?? [];

  if (extensions.length === 0) {
    return null;
  }

  const pattern =
    extensions.length === 1 && extensions[0] === '**'
      ? '**'
      : `**/*.${getGlobExtensions(extensions)}`;

  return {
    scripts: {
      'lint:cspell': `cspell lint --no-progress --relative --no-must-find-files --dot --gitignore "${pattern}"`,
    },
  };
}

export function getPackageJson({
  normalizedConfigsConfig,
}: GetPackageJsonOptions): FeaturePackageJson {
  const scripts = getScripts(normalizedConfigsConfig);
  return {
    ...scripts,
    devDependencies: {
      cspell: '',
    },
  };
}

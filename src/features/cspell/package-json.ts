import type {
  FeaturePackageJson,
  GetPackageJsonOptions,
} from '@/types/feature-configs';
import { getGlobExtensions } from '@/utils/misc';

function getScripts(
  validConfigsConfig: GetPackageJsonOptions['validConfigsConfig']
) {
  const extensions = validConfigsConfig.features?.cspell?.extensions ?? [];

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
  validConfigsConfig,
}: GetPackageJsonOptions): FeaturePackageJson {
  const scripts = getScripts(validConfigsConfig);
  return {
    ...scripts,
    devDependencies: {
      cspell: '',
    },
  };
}

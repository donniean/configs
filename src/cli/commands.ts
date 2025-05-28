import { buildCleanCommand, buildSetupCommand } from '@/helpers/commands';
import type { Configs } from '@/types/configs';

export function buildCommands(configs: Configs) {
  const allSetupCommands: string[] = [];
  const allCleanCommands: string[] = [];

  for (const config of configs) {
    const { name, pkg = {}, filePaths = [], setup, clean } = config;
    const setupCommands = setup.map((item) =>
      buildSetupCommand({ name, pkg, filePaths, setupCommandAction: item }),
    ) as string[];
    const cleanCommands = clean.map((item) =>
      buildCleanCommand({
        name,
        pkg,
        filePaths,
        cleanCommandAction: item,
      }),
    ) as string[];
    allSetupCommands.push(`# ${name}`, ...setupCommands);
    allCleanCommands.push(`# ${name}`, ...cleanCommands);
  }

  return { setup: allSetupCommands, clean: allCleanCommands };
}

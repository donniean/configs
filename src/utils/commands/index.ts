interface BuildCommandOptions {
  mainCommand: string;
  subCommand?: string;
  options?: string[];
  args?: string[];
}

function buildCommand({
  mainCommand,
  subCommand = '',
  options = [],
  args = [],
}: BuildCommandOptions) {
  const firstLineValues = [mainCommand, subCommand, ...options].filter(Boolean);
  const firstLine = firstLineValues.join(' ').trim();
  const argLines = args.filter(Boolean);

  if (argLines.length > 1) {
    const finalArgLines = argLines.map((token) => `  ${token}`);
    const lines = [firstLine, ...finalArgLines];
    return lines.join(' \\ \n').trim();
  }

  const lines = [firstLine, ...argLines];
  return lines.join(' ').trim();
}

export { buildCommand };

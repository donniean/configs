interface CommandLine {
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
}: CommandLine) {
  const firstLineValues = [mainCommand, subCommand, ...options].filter(Boolean);
  const firstLine = firstLineValues.join(' ').trim();
  const argLines = args.filter(Boolean).map((token) => `  ${token}`);
  const lines = [firstLine, ...argLines];
  return lines.join(' \\ \n').trim();
}

export { buildCommand };

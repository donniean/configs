export function getGlobExtensions(
  extensions: string[] | string,
  options?: { addDot?: boolean }
) {
  const addDot = options?.addDot;
  const dot = addDot ? '.' : '';

  if (Array.isArray(extensions)) {
    const { length } = extensions;

    if (length === 0) {
      return '';
    }

    if (length === 1) {
      return `${dot}${extensions.join(',')}`;
    }

    return `${dot}{${extensions.join(',')}}`;
  }

  return `${dot}${extensions}`;
}

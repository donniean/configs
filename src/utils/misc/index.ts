function addQuote(value: string) {
  return `"${value}"`;
}

export function getPatternsString(patterns: string[]) {
  return patterns.map(pattern => addQuote(pattern)).join(' ');
}

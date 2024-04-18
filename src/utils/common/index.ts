import { isEmpty } from 'lodash-es';

export function deepTrim<T extends Record<string, unknown>>(data: T): T {
  const entries = Object.entries(data).map(([key, value]) => {
    let finalValue;
    if (typeof value === 'string') {
      finalValue = value.trim();
    } else if (typeof value === 'object' && !isEmpty(value)) {
      finalValue = deepTrim(value);
    } else {
      finalValue = value;
    }
    return [key, finalValue];
  });

  return Object.fromEntries(entries) as T;
}

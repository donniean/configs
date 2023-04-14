import format from 'date-fns/format';

export function formatNow(formatter?: string) {
  const defaultFormatter = 'yyyy-MM-dd HH:mm:ss.SSS';
  return format(new Date(), formatter ?? defaultFormatter);
}

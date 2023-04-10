import { createLogger, format, transports } from 'winston';

const toUpperCaseLevel = format((info) => ({
  ...info,
  level: info.level.toUpperCase(),
}));

const customFormat = format.printf(
  ({ timestamp, level, message }) =>
    `[${timestamp as string}] [${level}] ${message as string}`
);

export default createLogger({
  level: 'debug',
  format: format.combine(
    toUpperCaseLevel(),
    format.colorize({ level: true }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
    format.ms(),
    customFormat
  ),
  transports: [new transports.Console()],
});

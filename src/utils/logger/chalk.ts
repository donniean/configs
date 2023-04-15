import chalk from 'chalk';

import * as dateTime from '@/utils/date-time';

const {
  log: consoleLog,
  error: consoleError,
  warn: consoleWarn,
  info: consoleInfo,
  debug: consoleDebug,
} = console;

const LEVEL_MAP = {
  error: {
    output: consoleError,
    color: chalk.red,
  },
  warn: {
    output: consoleWarn,
    color: chalk.yellow,
  },
  info: {
    output: consoleInfo,
    color: chalk.green,
  },
  debug: {
    output: consoleDebug,
    color: chalk.blue,
  },
};

export function lf(lineNumber?: number) {
  const length = lineNumber ? (lineNumber > 0 ? lineNumber : 1) : 1;
  const lines = Array.from({ length }).join('\n');
  consoleLog(lines);
}

type Message = string | number;

interface LogOptions {
  level: 'error' | 'warn' | 'info' | 'debug';
  message: Message;
  isShowTime?: boolean;
  isShowLevel?: boolean;
  isColorizeTime?: boolean;
  isColorizeLevel?: boolean;
  isColorizeMessage?: boolean;
  isBoldMessage?: boolean;
  isInverseMessage?: boolean;
  isLfBefore?: boolean;
  isLfAfter?: boolean;
  isSilent?: boolean;
}

export function log({
  level,
  message,
  isShowTime = true,
  isShowLevel = true,
  isColorizeTime = false,
  isColorizeLevel = true,
  isColorizeMessage = false,
  isBoldMessage = false,
  isInverseMessage = false,
  isLfBefore = false,
  isLfAfter = false,
  isSilent = false,
}: LogOptions) {
  const { output, color } = LEVEL_MAP[level];

  if (isSilent) {
    return;
  }

  const results = [];

  if (isShowTime) {
    const time = dateTime.formatNow();
    const text = `[${time}]`;
    const content = isColorizeTime ? color(text) : text;
    results.push(content);
  }

  if (isShowLevel) {
    const text = `[${level.toUpperCase()}]`;
    const content = isColorizeLevel ? color(text) : text;
    results.push(content);
  }

  let content = isColorizeMessage ? color(message) : message;
  content = isBoldMessage ? chalk.bold(content) : content;
  content = isInverseMessage ? chalk.inverse(content) : content;
  results.push(content);

  let finalMessage = results.join(' ');

  if (isLfBefore) {
    finalMessage = `\n${finalMessage}`;
  }

  if (isLfAfter) {
    finalMessage = `${finalMessage}\n`;
  }

  output(finalMessage);
}

type LeveledLogOptions = Partial<Omit<LogOptions, 'message'>>;

export function error(message: Message, options?: LeveledLogOptions) {
  log({ level: 'error', message, ...options });
}

export function warn(message: Message, options?: LeveledLogOptions) {
  log({ level: 'warn', message, ...options });
}

export function info(message: Message, options?: LeveledLogOptions) {
  log({ level: 'info', message, ...options });
}

export function debug(message: Message, options?: LeveledLogOptions) {
  log({ level: 'debug', message, ...options });
}

export function messageOnly(message: Message, options?: LeveledLogOptions) {
  const defaultOptions = {
    isShowTime: false,
    isShowLevel: false,
  };
  const finalOptions = { ...defaultOptions, ...options };
  log({ level: 'info', message, ...finalOptions });
}

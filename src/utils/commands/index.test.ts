// tests/buildCommand.test.ts
import { expect, test } from 'vitest';

import { buildCommand } from './index';

test('no subCommand, no options, no args', () => {
  const result = buildCommand({ mainCommand: 'git' });
  expect(result).toBe('git');
});

test('with subCommand only', () => {
  const result = buildCommand({
    mainCommand: 'git',
    subCommand: 'status',
  });
  expect(result).toBe('git status');
});

test('with options only', () => {
  const result = buildCommand({
    mainCommand: 'npm',
    options: ['--save-dev', '-E'],
  });
  expect(result).toBe('npm --save-dev -E');
});

test('with single arg only', () => {
  const result = buildCommand({
    mainCommand: 'echo',
    args: ['hello'],
  });
  expect(result).toBe('echo hello');
});

test('with multiple args only', () => {
  const result = buildCommand({
    mainCommand: 'echo',
    args: ['hello', 'world'],
  });
  const expected = ['echo', '  hello', '  world'].join(' \\ \n');
  expect(result).toBe(expected);
});

test('with full command: subCommand, options, single arg', () => {
  const result = buildCommand({
    mainCommand: 'docker',
    subCommand: 'pull',
    options: ['--quiet'],
    args: ['ubuntu:latest'],
  });
  // single arg, no line breaks
  expect(result).toBe('docker pull --quiet ubuntu:latest');
});

test('with full command: subCommand, options, multiple args', () => {
  const result = buildCommand({
    mainCommand: 'docker',
    subCommand: 'run',
    options: ['-d', '--name my-container'],
    args: ['ubuntu:latest', '-p 8080:80'],
  });
  const expected = [
    'docker run -d --name my-container',
    '  ubuntu:latest',
    '  -p 8080:80',
  ].join(' \\ \n');
  expect(result).toBe(expected);
});

test('trims empty strings in options and args', () => {
  const result = buildCommand({
    mainCommand: 'cmd',
    options: ['', '--flag'],
    args: ['', 'param'],
  });
  // single non-empty arg, should be single-line
  expect(result).toBe('cmd --flag param');
});

test('empty args array treated as no args', () => {
  const result = buildCommand({
    mainCommand: 'ls',
    options: ['-la'],
    args: [],
  });
  expect(result).toBe('ls -la');
});

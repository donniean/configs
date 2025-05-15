import { expect, test } from 'vitest';

import { buildCommand } from './index';

test('buildCommand without subCommand, options, args', () => {
  const result = buildCommand({ mainCommand: 'git' });
  expect(result).toBe('git');
});

test('buildCommand with subCommand only', () => {
  const result = buildCommand({
    mainCommand: 'git',
    subCommand: 'status',
  });
  expect(result).toBe('git status');
});

test('buildCommand with options only', () => {
  const result = buildCommand({
    mainCommand: 'npm',
    options: ['--save-dev', '-E'],
  });
  expect(result).toBe('npm --save-dev -E');
});

test('buildCommand with args only', () => {
  const result = buildCommand({
    mainCommand: 'echo',
    args: ['hello', 'world'],
  });
  const expected = ['echo', '  hello', '  world'].join(' \\ \n');
  expect(result).toBe(expected);
});

test('buildCommand with full command: subCommand, options, args', () => {
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

test('buildCommand trims empty strings in options and args', () => {
  const result = buildCommand({
    mainCommand: 'cmd',
    subCommand: '',
    options: ['', '--flag'],
    args: ['', 'param'],
  });
  const expected = ['cmd --flag', '  param'].join(' \\ \n');
  expect(result).toBe(expected);
});

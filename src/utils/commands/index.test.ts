import { describe, expect, test } from 'vitest';

import { buildCommand } from './index';

describe('buildCommand', () => {
  test('handles only command', () => {
    const cmd = buildCommand({ mainCommand: 'ls' });
    expect(cmd).toBe('ls');
  });

  test('includes subCommand', () => {
    const cmd = buildCommand({ mainCommand: 'git', subCommand: 'status' });
    expect(cmd).toBe('git status');
  });

  test('includes options', () => {
    const cmd = buildCommand({
      mainCommand: 'grep',
      options: ['-r', '--color=auto'],
    });
    expect(cmd).toBe('grep -r --color=auto');
  });

  test('supports multiline args with line continuation', () => {
    const cmd = buildCommand({
      mainCommand: 'echo',
      args: ['foo', 'bar', 'baz'],
    });
    expect(cmd).toBe('echo \\ \n  foo \\ \n  bar \\ \n  baz');
  });

  test('combines all fields correctly', () => {
    const cmd = buildCommand({
      mainCommand: 'docker',
      subCommand: 'run',
      options: ['-d', '--name=my-container'],
      args: ['nginx:latest', '/bin/bash'],
    });
    expect(cmd).toBe(
      'docker run -d --name=my-container \\ \n  nginx:latest \\ \n  /bin/bash',
    );
  });

  test('wraps tokens containing spaces in quotes', () => {
    const cmd = buildCommand({
      mainCommand: 'echo',
      args: ['"hello world"', '"foo bar"'],
    });
    expect(cmd).toBe('echo \\ \n  "hello world" \\ \n  "foo bar"');
  });

  test('filters out empty strings or undefined values', () => {
    const cmd = buildCommand({
      mainCommand: 'cmd',
      subCommand: '',
      options: [],
      args: [''],
    });
    expect(cmd).toBe('cmd');
  });

  test('generates npm install autocorrect-node command', () => {
    const cmd = buildCommand({
      mainCommand: 'npm',
      subCommand: 'install',
      options: ['--save-dev'],
      args: ['autocorrect-node'],
    });
    expect(cmd).toBe('npm install --save-dev \\ \n  autocorrect-node');
  });

  test('generates npm pkg set lint scripts', () => {
    const cmd = buildCommand({
      mainCommand: 'npm',
      subCommand: 'pkg',
      options: ['set'],
      args: [
        "scripts.lint:text='autocorrect --lint'",
        "scripts.lint:text:fix='autocorrect --fix'",
      ],
    });
    expect(cmd).toBe(
      "npm pkg set \\ \n  scripts.lint:text='autocorrect --lint' \\ \n  scripts.lint:text:fix='autocorrect --fix'",
    );
  });

  test('generates npm pkg delete lint scripts and devDependency', () => {
    const cmd = buildCommand({
      mainCommand: 'npm',
      subCommand: 'pkg',
      options: ['delete'],
      args: [
        'devDependencies.autocorrect-node',
        'scripts.lint:text',
        'scripts.lint:text:fix',
      ],
    });
    expect(cmd).toBe(
      'npm pkg delete \\ \n  devDependencies.autocorrect-node \\ \n  scripts.lint:text \\ \n  scripts.lint:text:fix',
    );
  });

  test('generates rm commands for autocorrect config files', () => {
    const cmd = buildCommand({
      mainCommand: 'rm',
      args: ['.autocorrectrc', '.autocorrectignore'],
    });
    expect(cmd).toBe('rm \\ \n  .autocorrectrc \\ \n  .autocorrectignore');
  });

  test('generates curl commands for downloading config files', () => {
    const cmd = buildCommand({
      mainCommand: 'curl',
      args: [
        '-O https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectrc',
        '-O https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectignore',
      ],
    });
    expect(cmd).toBe(
      'curl \\ \n  -O https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectrc \\ \n  -O https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectignore',
    );
  });
});

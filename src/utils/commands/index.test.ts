import { describe, expect, test } from 'vitest';

import { buildCommand } from './index';

describe('buildCommand', () => {
  test('should handle only mainCommand', () => {
    expect(buildCommand({ mainCommand: 'echo' })).toBe('echo');
  });

  test('should include subCommand when provided', () => {
    expect(buildCommand({ mainCommand: 'git', subCommand: 'commit' })).toBe(
      'git commit',
    );
  });

  test('should include options in the first line', () => {
    expect(
      buildCommand({ mainCommand: 'git', options: ['-a', '--amend'] }),
    ).toBe('git -a --amend');
  });

  test('should include args each on its own line with continuation slashes', () => {
    const result = buildCommand({
      mainCommand: 'ls',
      args: ['file1', 'file2'],
    });
    expect(result.endsWith('file2')).toBe(true);

    const parts = result.split(' \\ \n');
    expect(parts).toEqual(['ls', 'file1', 'file2']);
  });

  test('should combine command, subCommand, options, and args correctly', () => {
    const result = buildCommand({
      mainCommand: 'docker',
      subCommand: 'run',
      options: ['-d', '--name test'],
      args: ['image', 'bash'],
    });

    const parts = result.split(' \\ \n');
    expect(parts).toEqual(['docker run -d --name test', 'image', 'bash']);
  });
});

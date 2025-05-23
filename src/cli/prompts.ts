import { checkbox, Separator } from '@inquirer/prompts';

export const questions = {
  tools: () =>
    checkbox({
      message: 'Select tools',
      choices: [
        { value: 'npm', name: 'npm' },
        { value: 'yarn', name: 'yarn' },
        new Separator(),
        { name: 'pnpm', value: 'pnpm', disabled: true },
        {
          value: 'pnpm',
          name: 'pnpm',
          disabled: '(pnpm is not available)',
        },
      ],
    }),
};

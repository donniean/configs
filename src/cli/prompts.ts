import { checkbox } from '@inquirer/prompts';

import { CONFIGS } from '@/configs';

const choices = CONFIGS.map(({ key, name }) => ({ value: key, name }));

export const questions = {
  tools: () =>
    checkbox({
      message: 'Select tools',
      choices: choices,
      pageSize: choices.length,
      required: true,
    }),
};

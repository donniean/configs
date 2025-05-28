import { z } from 'zod/v4';

import { CLEAN_COMMAND_TYPE, SETUP_COMMAND_TYPES } from '@/constants/configs';

const SetupCommandTypeSchema = z.enum(SETUP_COMMAND_TYPES);

const CleanCommandTypeSchema = z.enum(CLEAN_COMMAND_TYPE);

const SetupCommandActionSchema = z.strictObject({
  type: SetupCommandTypeSchema,
  command: z.string().optional(),
});

const CleanCommandActionSchema = z.strictObject({
  type: CleanCommandTypeSchema,
  command: z.string().optional(),
});

const ConfigSchema = z
  .strictObject({
    key: z.string(),
    name: z.string(),
    url: z.url().optional(),
    pkg: z
      .strictObject({
        devDependencies: z
          .array(
            z.object({
              packageName: z.string(),
              tag: z.string().optional(),
              version: z.string().optional(),
            }),
          )
          .optional(),
        scripts: z
          .array(
            z.strictObject({
              key: z.string(),
              value: z.string(),
            }),
          )
          .optional(),
      })
      .optional(),
    filePaths: z.array(z.string()).optional(),
    setup: z.array(SetupCommandActionSchema),
    clean: z.array(CleanCommandActionSchema),
  })
  .readonly();

const ConfigsSchema = z.array(ConfigSchema).readonly();

export {
  CleanCommandActionSchema,
  ConfigSchema,
  ConfigsSchema,
  SetupCommandActionSchema,
};

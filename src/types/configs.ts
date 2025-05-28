import type { z } from 'zod/v4';

import type {
  CleanCommandActionSchema,
  ConfigSchema,
  ConfigsSchema,
  SetupCommandActionSchema,
} from '@/schemas/configs';

type SetupCommandAction = z.infer<typeof SetupCommandActionSchema>;

type CleanCommandAction = z.infer<typeof CleanCommandActionSchema>;

type Config = z.infer<typeof ConfigSchema>;

type Configs = z.infer<typeof ConfigsSchema>;

export type { CleanCommandAction, Config, Configs, SetupCommandAction };

import type { z } from 'zod/v4';

import type { ActionSchema } from '@/schemas';

type Action = z.infer<typeof ActionSchema>;

export type { Action };

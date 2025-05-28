import type { z } from 'zod/v4';

import type { ActionSchema } from '@/schemas/actions';

export type Action = z.infer<typeof ActionSchema>;

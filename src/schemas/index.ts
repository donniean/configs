import { z } from 'zod/v4';

import { ACTIONS } from '@/constants';

const ActionSchema = z.enum(ACTIONS);

export { ActionSchema };

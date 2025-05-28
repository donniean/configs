import { z } from 'zod/v4';

import { ACTIONS } from '@/constants/actions';

export const ActionSchema = z.enum(ACTIONS);

import type { MergeJsonFileSyncOptions } from '@/utils/files/types';

export type MergePackageJsonSyncOptions = Pick<
  MergeJsonFileSyncOptions,
  'data'
>;

import type { MergeJsonFileSyncOptions } from '@/utils/files/types';

export type OutputPackageJsonSyncOptions = Pick<
  MergeJsonFileSyncOptions,
  'data'
>;

export type MergePackageJsonSyncOptions = OutputPackageJsonSyncOptions;

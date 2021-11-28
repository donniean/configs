import {copyFilesToDestByTemplatesSync} from '@/utils/fs';

export default async () => {
  const fileNames = ['.gitignore'];
  copyFilesToDestByTemplatesSync({modulePath: __dirname, fileNames});
};

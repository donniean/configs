import {copyFilesToDestByTemplatesSync} from '@/utils/fs';

export default async () => {
  const fileNames = ['.editorconfig'];
  copyFilesToDestByTemplatesSync({modulePath: __dirname, fileNames});
};

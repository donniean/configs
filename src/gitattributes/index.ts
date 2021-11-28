import { writeFileToDestSync } from '@/utils/fs';
import request from '@/utils/request';

export default async () => {
  const url =
    'https://raw.githubusercontent.com/alexkaratarakis/gitattributes/master/Web.gitattributes';
  const fileName = '.gitattributes';
  const data = await request(url);
  if (typeof data === 'string') {
    writeFileToDestSync({ fileName, data });
  }
};

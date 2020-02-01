import { templateTag } from '@/scripts';

const userEmail = 'averylongemailaddress@companyname.com';
const titleH1 = templateTag({
  content: 'Apps by Host',
  tag: 'h1 flex-shrink-0',
});
const emailHtml = templateTag({
  tag: 'span',
  content: userEmail,
  attributes: [
    {
      key: 'class',
      value: 'font-bold',
    },
  ],
});
const user = templateTag({
  tag: 'p',
  content: `for user ${emailHtml}`,
  attributes: [
    {
      key: 'class',
      value: 'ellipsis mx-1',
    },
  ],
});
export const mainTitle = templateTag({
  tag: 'header',
  content: [titleH1, user].join(' '),
  attributes: [
    {
      key: 'class',
      value: 'm-3 d-flex align-items-end',
    },
  ],
});

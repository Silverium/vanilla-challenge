import { templateTag, templateCheckbox } from '../../templates';

const userEmail = 'averylongemailaddress@companyname.com';
const titleH1 = templateTag({
  content: 'Apps by Host',
  tag: 'h1',
  attributes: [
    {
      key: 'class',
      value: ' flex-shrink-0',
    },
  ],
});
const emailHtml = templateTag({
  tag: 'span',
  content: userEmail,
  attributes: [
    {
      key: 'title',
      value: userEmail,
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
const checkbox = templateCheckbox({
  content: 'Show as an awesome grid',
  name: 'listMode',
  attributes: [
    {
      key: 'id',
      value: 'listModeCheckbox',
    },
    {
      key: 'class',
      value: 'cursor-pointer',
    },
  ],
  labelAttributes: [
    {
      key: 'class',
      value: 'text-nowrap ml-2 cursor-pointer',
    },
  ],
});
export const mainTitleHtml = templateTag({
  tag: 'header',
  content: [titleH1, user, checkbox].join(' '),
  attributes: [
    {
      key: 'class',
      value: 'm-3 d-flex align-items-end',
    },
  ],
});

import { ApdexSdk, templateTag } from '@/scripts';
import { hostAppData as list } from '@/mocks';

const Apdex = ApdexSdk({ list });
const rankedHosts = Apdex.getHostsList();
const grid = rankedHosts.reduce((htmlString, hostName) => {
  const ranking = Apdex.getTopAppsByHost(hostName);
  const appsListLi = ranking
    .map(element => {
      const apdex = templateTag({
        tag: 'span',
        content: element.apdex,
        attributes: [
          {
            key: 'class',
            value: 'apdex mx-3',
          },
        ],
      });
      const name = templateTag({
        tag: 'span',
        content: element.name,
      });
      return templateTag({
        tag: 'li',
        content: [apdex, name].join(' '),
        attributes: [
          {
            key: 'class',
            value: 'd-flex flex-nowrap align-items-start my-2',
          },
        ],
      });
    })
    .join(' ');
  const appsUl = templateTag({
    content: appsListLi,
    attributes: [{ key: 'class', value: 'hosts-list my-2' }],
    tag: 'ul',
  });
  const hostTitle = templateTag({
    content: hostName,
    attributes: [
      {
        key: 'class',
        value: 'mx-3 font-bold',
      },
    ],
  });

  const card = templateTag({
    content: `${hostTitle} ${appsUl}`,
    attributes: [
      {
        key: 'class',
        value: 'card m-3 py-2',
      },
    ],
  });
  return htmlString + card;
}, '');
export const hostsList = templateTag({
  tag: 'div',
  attributes: [
    {
      key: 'class',
      value: 'hosts',
    },
    {
      key: 'id',
      value: 'hostsList',
    },
  ],
  content: grid,
});

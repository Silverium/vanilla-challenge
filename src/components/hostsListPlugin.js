import { ApdexSdk, templateTag } from '@/scripts';
import { hostAppData as list } from '@/mocks';
import { APPS_BY_HOST_DISPLAY_NUMBER as resultsToDisplay } from '@/config';

const Apdex = ApdexSdk(list);
// using window as a store
window.Apdex = Apdex;

export const hostsListPlugin = {
  getHtml() {
    const rankedHosts = Apdex.getHostsList();

    const grid = rankedHosts.reduce((htmlString, hostName) => {
      const ranking = Apdex.getTopAppsByHost(hostName).slice(0, resultsToDisplay);
      const appsListLi = ranking
        .map((element, rankingIndex) => {
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
                value: 'appInHost d-flex flex-nowrap align-items-start my-2',
              },
              { key: 'data-host-name', value: hostName },
              { key: 'data-app-name', value: element.name },
              { key: 'data-ranking-index', value: `${rankingIndex}` },
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
    const appsByHostList = templateTag({
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
    return appsByHostList;
  },
};

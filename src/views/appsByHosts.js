import { hostsList, mainTitle, modalSdk } from '@/components';
import { templateTag } from '@/scripts';

export const appsByHosts = {
  load(state = {}) {
    let { isGridMode } = state;
    const containerHtml = templateTag({
      attributes: [{ key: 'class', value: 'container' }],
      content: [mainTitle, hostsList.load()].join(' '),
    });
    const parser = new DOMParser();
    const doc = parser.parseFromString(containerHtml, 'text/html');

    const checkboxNode = doc.getElementById('listModeCheckbox');
    const hostsListNode = doc.getElementById('hostsList');
    const { childNodes: labelNodes } = checkboxNode.parentElement;
    const labelTextNode = labelNodes[labelNodes.length - 1];
    const classesToToggle = ['grid-mode', 'd-flex', 'flex-wrap'];
    checkboxNode.addEventListener('click', event => {
      if (event?.target?.checked) {
        isGridMode = true;
        hostsListNode.classList.add(...classesToToggle);
        labelTextNode.textContent = ' Show as list';
      } else {
        isGridMode = false;
        hostsListNode.classList.remove(...classesToToggle);
        labelTextNode.textContent = ' Show as an awesome grid';
      }
    });
    if (isGridMode) {
      checkboxNode.click();
    }
    document.body = doc.body;
    const modalManager = modalSdk();
    const appInHosts = document.getElementsByClassName('appInHost');

    for (let hostIndex = 0; hostIndex < appInHosts.length; hostIndex += 1) {
      const hostNode = appInHosts[hostIndex];
      hostNode.addEventListener('click', () => {
        const { appName, rankingIndex, hostName } = hostNode.dataset;
        modalManager.setHeader(appName);
        const hostJson = window.Apdex.getTopAppsByHost(hostName)[rankingIndex];
        const deleteButtonId = hostJson.name.replace(/[\W]\d/, '');
        const buttonHtml = templateTag({
          tag: 'button',
          content: 'Delete',
          attributes: [
            {
              key: 'id',
              value: deleteButtonId,
            },
            { key: 'class', value: 'btn-danger' },
          ],
        });

        const versionHtml = templateTag({ content: `version: ${hostJson.version}` });
        const wrapper = templateTag({
          attributes: [{ key: 'class', value: 'd-flex justify-content-between' }],
          content: versionHtml + buttonHtml,
        });
        modalManager.setBody(wrapper);
        document.getElementById(deleteButtonId).onclick = () => {
          window.Apdex.removeAppToHosts(hostJson);
          const currentcheckboxNode = document.getElementById('listModeCheckbox');

          this.load({ isGridMode: currentcheckboxNode.checked });
        };
        modalManager.show();
      });
    }
  },
};

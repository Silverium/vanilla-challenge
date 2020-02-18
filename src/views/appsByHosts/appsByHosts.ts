import { hostsListPlugin, mainTitleHtml, modalSdk } from '../../components';
import { templateTag } from '../../templates';

export const appsByHosts = {
  load(state: { isGridMode: Boolean } = { isGridMode: false }) {
    let { isGridMode } = state;
    const containerHtml = templateTag({
      attributes: [{ key: 'class', value: 'container' }],
      content: [mainTitleHtml, hostsListPlugin.getHtml()].join(' '),
    });
    const parser = new DOMParser();
    const doc = parser.parseFromString(containerHtml, 'text/html');

    const checkboxNode = doc.getElementById('listModeCheckbox');
    const hostsListNode = doc.getElementById('hostsList');
    const { childNodes: labelNodes } = checkboxNode.parentElement;
    const labelTextNode = labelNodes[labelNodes.length - 1];
    const classesToToggle = ['grid-mode', 'd-flex', 'flex-wrap'];
    checkboxNode.addEventListener('click', (event : MouseEvent ) => {
      const isCheckbox = event.target as HTMLInputElement;
      if (isCheckbox.checked) {
        isGridMode = true;
        classesToToggle.forEach(className => hostsListNode.classList.add(className));
        // hostsListNode.classList.add(...classesToToggle); is not compatible with IE 11
        labelTextNode.textContent = ' Show as list';
      } else {
        isGridMode = false;
        classesToToggle.forEach(className => hostsListNode.classList.remove(className));
        labelTextNode.textContent = ' Show as an awesome grid';
      }
    });
    if (isGridMode) {
      checkboxNode.click();
    }
    document.body = doc.body;
    const modalManager = modalSdk();

    const hostNameNodes = document.getElementsByClassName('hostTitle');
    Array.from(hostNameNodes).forEach((hostNameNode: HTMLElement) => {
      hostNameNode.classList.add('cursor-pointer');
      hostNameNode.addEventListener('click', () => {
        const { hostName } = hostNameNode.dataset;
        modalManager.setHeader(hostName);

        modalManager.setBody(hostsListPlugin.getHostsHtml([hostName]));

        modalManager.show();
      });
    });

    const appInHosts = document.getElementsByClassName('appInHost');

    for (let hostIndex = 0; hostIndex < appInHosts.length; hostIndex += 1) {
      const hostNode = appInHosts[hostIndex] as HTMLElement;
      hostNode.classList.add('cursor-pointer');
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
          const currentcheckboxNode = document.getElementById('listModeCheckbox') as HTMLInputElement;

          this.load({ isGridMode: currentcheckboxNode.checked });
        };
        modalManager.show();
      });
    }
  },
};

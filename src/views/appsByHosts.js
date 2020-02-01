import { hostsList, mainTitle } from '@/components';
import { templateTag } from '@/scripts';

export const appsByHosts = {
  load() {
    const containerHtml = templateTag({
      attributes: [{ key: 'class', value: 'container' }],
      content: [mainTitle, hostsList].join(' '),
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
        hostsListNode.classList.add(...classesToToggle);
        labelTextNode.textContent = ' Show as list';
      } else {
        hostsListNode.classList.remove(...classesToToggle);
        labelTextNode.textContent = ' Show as an awesome grid';
      }
    });
    document.body = doc.body;
  },
};

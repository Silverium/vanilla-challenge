import './_loader-chase.scss';

const innerHtml = `
<div class="centered">
  <div class="sk-chase">
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
  </div>
</div>`;
export const loaderChasePlugin = {
  innerHtml() {
    return innerHtml;
  },
  loaderChaseNode() {
    const parser = new DOMParser();
    const doc = parser.parseFromString(innerHtml, 'text/html');
    return doc.body.firstChild;
  },
};

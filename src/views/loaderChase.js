export const loaderChasePlugin = {
  innerHtml() {
    return `
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
  },
  loaderChaseNode() {
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
    const parser = new DOMParser();
    const doc = parser.parseFromString(innerHtml, 'text/html');
    return doc.body.firstChild;
  },
};

import { loaderChasePlugin } from './views/';
import './types'
import './sass/index.scss';

import { appsByHosts } from './views';

const loader = loaderChasePlugin.loaderChaseNode();
document.body.appendChild(loader);

setTimeout(() => {
  // intended timeout, so we can see the beatiful loader :D
  appsByHosts.load();
}, 1500);

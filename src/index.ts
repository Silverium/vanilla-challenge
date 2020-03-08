import { loaderChasePlugin } from './views/';
import './types'
import './sass/index.scss';

import { appsByHosts } from './views';

const loader = loaderChasePlugin.loaderChaseNode();
document.body.appendChild(loader);

appsByHosts.load();

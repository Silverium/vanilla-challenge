import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import './fonts/libre-baskerville-v5-latin-regular.woff';
import './fonts/libre-baskerville-v5-latin-regular.woff2';

import './index.html';
import './index.scss';
import { templateTag } from '@/scripts';
import { hostsList, mainTitle } from '@/components';

OfflinePluginRuntime.install();

const containerHtml = templateTag({
  attributes: [{ key: 'class', value: 'container' }],
  content: [mainTitle, hostsList].join(' '),
});

document.body.innerHTML = containerHtml;

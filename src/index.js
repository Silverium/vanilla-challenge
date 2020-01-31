import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import './fonts/libre-baskerville-v5-latin-regular.woff';
import './fonts/libre-baskerville-v5-latin-regular.woff2';

import './index.html';
import './index.scss';
import { ApdexSdk } from './scripts';
import { hostAppData as list } from './mocks';

OfflinePluginRuntime.install();

const Apdex = ApdexSdk({ list });
const first = Apdex.getTopAppsByHost('2b4cfcf7-81d5.kelli.org');
const output = document.getElementById('output');
output.innerHTML = JSON.stringify(first, 1, 1);

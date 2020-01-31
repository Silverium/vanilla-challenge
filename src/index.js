import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import './fonts/libre-baskerville-v5-latin-regular.woff';
import './fonts/libre-baskerville-v5-latin-regular.woff2';

import './index.html';
import './index.scss';
import { ApdexSdk } from './scripts';
import { hostAppData as list } from './mocks';

OfflinePluginRuntime.install();

const Apdex = ApdexSdk({ list });
const firsts = Apdex.getTopAppsByHost('2b4cfcf7-81d5.kelli.org');
const output = document.getElementById('output');
Apdex.removeAppToHosts(firsts[0]);
const seconds = Apdex.getTopAppsByHost('2b4cfcf7-81d5.kelli.org');
output.innerHTML = JSON.stringify(firsts, 1, 1) + JSON.stringify(seconds, 1, 1);

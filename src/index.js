import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import './fonts/libre-baskerville-v5-latin-regular.woff';
import './fonts/libre-baskerville-v5-latin-regular.woff2';

import './index.html';
import './index.scss';
import { ApdexSdk } from './scripts';

OfflinePluginRuntime.install();

const Apdex = ApdexSdk({ data: 'ello wold' });
Apdex.getTopAppsByHost();

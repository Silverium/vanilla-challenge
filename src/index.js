import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import './index.html';
import './index.scss';
import { appsByHosts } from '@/views';

OfflinePluginRuntime.install();

appsByHosts.load();

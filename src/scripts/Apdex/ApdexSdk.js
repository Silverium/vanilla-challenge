// this is the core of the SDK
import { dataDigester } from './dataDigester';
// these could be like plugins, improved over time, and extending the SDK
import { getTopAppsByHostPlugin } from './getTopAppsByHostPlugin';
import { addAppToHostsPlugin } from './addAppToHostsPlugin';
import { removeAppToHostsPlugin } from './removeAppToHostsPlugin';

export const ApdexSdk = props => {
  const { digestHostAppData, hostAppEntryDigester, hostAppEntryGarbager } = dataDigester();
  const orderedMap = digestHostAppData(props.list);

  return Object.freeze({
    ...getTopAppsByHostPlugin(orderedMap),
    ...addAppToHostsPlugin(props.list, orderedMap, hostAppEntryDigester),
    ...removeAppToHostsPlugin(props.list, orderedMap, hostAppEntryGarbager),
    getHostsList: () => [...orderedMap.keys()],
  });
};
export default ApdexSdk;

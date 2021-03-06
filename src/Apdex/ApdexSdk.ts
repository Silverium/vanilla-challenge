import { AppData } from '../types/index';
// this is the core of the SDK
import { dataDigester } from './dataDigester';
// these modules are plugins, that could be improved and increased over time, and extending the SDK
import { getTopAppsByHostPlugin } from './plugins/getTopAppsByHost/getTopAppsByHostPlugin';
import { addAppToHostsPlugin } from './plugins/addAppToHosts/addAppToHostsPlugin';
import { removeAppToHostsPlugin } from './plugins/removeAppToHosts/removeAppToHostsPlugin';
/**
 * Returns a set of tools to manage AppData
 * @param {AppData[]} list
 */
export const ApdexSdk = async (url: string) => {
  try {
    const list: AppData[] = await fetch(url)
      .then((response) => {
        return response.json();
      })
    const { digestHostAppData, hostAppEntryDigester, hostAppEntryGarbager } = dataDigester();
    const orderedMap = digestHostAppData(list);

    return Object.freeze({
      ...getTopAppsByHostPlugin(orderedMap),
      ...addAppToHostsPlugin(list, orderedMap, hostAppEntryDigester),
      ...removeAppToHostsPlugin(list, orderedMap, hostAppEntryGarbager),
      getHostsList: () => Array.from(orderedMap.keys()),
    });
  } catch (error) {
    console.error(error);

    return false
  }
};
export default ApdexSdk;

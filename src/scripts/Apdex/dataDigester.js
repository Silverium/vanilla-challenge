import {
  getConditionPlugin,
  elementInDictionarySorter,
  elementInSortedDictionaryRemover,
} from '@/scripts/utils';
import { APPS_ORDER_COMPARATOR, APPS_PROPERTY_TO_COMPARE } from '@/config';

/**
 * Plugin that returns an object of methods that are able to create a Map of ranked AppData for each Host,
 * removing and adding AppData of the rankings
 */
export const dataDigester = () => {
  const { getCondition } = getConditionPlugin();
  /**
   * Returns a method that loops into each entry of `apdexByHost` and adds AppData ranked by the `Condition`
   * (defined in `getCondition`) in the value
   * @param {RankedAppsByHost} apdexByHost
   * @returns {(AppData:AppData) => void}
   * ___
   * Complexity is O(n2) as we only loop on each host, and then on each element of the ranking.
   */
  const hostAppEntryDigester = apdexByHost => appData => {
    const condition = getCondition(APPS_ORDER_COMPARATOR, APPS_PROPERTY_TO_COMPARE);
    const { host = [] } = appData;
    host.forEach(elementInDictionarySorter(apdexByHost, appData, condition));
  };
  /**
   * Returns a method that loops into each entry of `apdexByHost` and removes the coincidence of the AppData in the value
   * @param {RankedAppsByHost} apdexByHost
   * @returns {(AppData:AppData) => void}
   * ___
   * Complexity is O(n2) as we only loop on each host, and then on each element of the ranking.
   */
  const hostAppEntryGarbager = apdexByHost => AppData => {
    const { host = [] } = AppData;
    host.forEach(elementInSortedDictionaryRemover(apdexByHost, AppData, APPS_PROPERTY_TO_COMPARE));
  };

  /**
   * Gets a list of all the AppData elements and distributes them into a Map object, containing all hosts as entries
   * and a ranked array (by condition specified at `hostAppEntryDigester` function) of AppData as values
   * @param {AppData[]} list
   * @param {function} condition
   * @returns {RankedAppsByHost}
   * ___
   * Complexity is O(n2), as each App can have many related hosts, and each host needs to check all Apps.
   */
  const digestHostAppData = (list = []) => {
    const apdexByHost = new Map();
    list.forEach(hostAppEntryDigester(apdexByHost));

    return apdexByHost;
  };

  return Object.freeze({
    digestHostAppData,
    hostAppEntryDigester,
    hostAppEntryGarbager,
  });
};

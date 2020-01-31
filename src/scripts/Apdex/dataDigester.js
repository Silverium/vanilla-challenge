import {
  conditionGetter,
  elementInDictionarySorter,
  elementInSortedDictionaryRemover
} from '@/scripts/utils';
import { APPS_ORDER_COMPARATOR, APPS_PROPERTY_TO_COMPARE } from '@/config';

export const dataDigester = () => {
  const { getCondition } = conditionGetter();
  // TODO: documentation
  const hostAppEntryDigester = apdexByHost => entry => {
    const condition = getCondition(APPS_ORDER_COMPARATOR, APPS_PROPERTY_TO_COMPARE);
    const { host = [] } = entry;
    host.forEach(elementInDictionarySorter(apdexByHost, entry, condition));
  };
  // TODO: documentation
  const hostAppEntryGarbager = apdexByHost => entry => {
    const { host = [] } = entry;
    host.forEach(elementInSortedDictionaryRemover(apdexByHost, entry, APPS_PROPERTY_TO_COMPARE));
  };

  /**
   *
   * @param {Array} list
   * @param {Function} condition
   */
  const digestHostAppData = (list = []) => {
    const apdexByHost = new Map();
    list.forEach(hostAppEntryDigester(apdexByHost));

    return apdexByHost;
  };

  return Object.freeze({
    digestHostAppData,
    hostAppEntryDigester,
    hostAppEntryGarbager
  });
};

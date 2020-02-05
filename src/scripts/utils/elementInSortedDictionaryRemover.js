import { indexOfOrdered } from './indexOfOrdered';

// TODO: tests, add the orderedBy prop (a path?)
/**
 *  Finds an `element` in a sorted array and removes it from the `dictionary`
 * @param {Map<*,[]>} dictionary
 * @param {*} element
 */
export const elementInSortedDictionaryRemover = (dictionary, element /* , orderedBy */) => {
  if (!(dictionary && element)) {
    throw new Error('missing parameters');
  }
  return key => {
    const sortedArray = dictionary.get(key);
    const index = indexOfOrdered(sortedArray, element, { isDescending: true });
    sortedArray.splice(index, 1);

    return element;
  };
};

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
    // TODO: improve performance doing an optimized search with the property
    const index = sortedArray.indexOf(element);
    sortedArray.splice(index, 1);

    return element;
  };
};

import { insertByOrder } from '@/scripts/utils';
/**
 * Inserts in the value (an array) of a dictionary an `element` ordered by the `sortBy` function
 * @param {Map<*,[]>} dictionary
 * @param {*} element
 * @param {(a:*,b:*) => boolean} sortBy
 */
export const elementInDictionarySorter = (dictionary, element, sortBy) => {
  if (!(dictionary && element && sortBy)) {
    throw new Error('missing arguments');
  }
  return key => {
    if (dictionary.has(key)) {
      // working with reference types we don't need to reset the array
      // but simply modify it in place
      const arrayOfEntries = dictionary.get(key);
      insertByOrder(arrayOfEntries, element, sortBy);
    } else {
      dictionary.set(key, [element]);
    }
  };
};

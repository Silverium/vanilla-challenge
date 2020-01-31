import { insertByOrder } from '@/scripts/utils';
// TODO: documentation, tests
export const elementInDictionarySorter = (dictionary, element, condition) => key => {
  if (dictionary.has(key)) {
    // working with reference types we don't need to reset the array
    // but simply modify it in place
    const arrayOfEntries = dictionary.get(key);
    insertByOrder(arrayOfEntries, element, condition);
  } else {
    dictionary.set(key, [element]);
  }
};

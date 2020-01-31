// TODO: documentation, tests
export const elementInSortedDictionaryRemover = (dictionary, element /* , property */) => key => {
  try {
    const sortedArray = dictionary.get(key);
    // TODO: improve performance doing an optimized search with the property
    const index = sortedArray.indexOf(element);
    sortedArray.splice(index, 1);

    return element;
  } catch (error) {
    console.error(error);
    return false;
  }
};

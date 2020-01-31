/**
 * Isolated function that inserts an element into a collection, when condition is met
 * @param {*} collection
 * @param {*} element
 * @param {*} condition
 */
export const insertByOrder = (collection = [], element, condition = (a, b) => a > b) => {
  const { length } = collection;
  if (length) {
    // whenever the condition is met, insert the element into the collection
    // TODO: optimize recursive function to walk the collection
    let counter = 0;
    // using a while loop instead a forEach, as it can be breaken when condition is met
    while (counter < length) {
      const isConditionMet = condition(collection[counter], element);
      if (isConditionMet) {
        collection.splice(counter, 0, element);
        break;
      }
      counter += 1;
    }
  } else {
    // insert it the first
    collection.push(element);
  }
  // no need to return collection, but it's nicer
  return collection;
};

/**
 * Given an ordered collection of primitive values following the OrderBy condition,
 * it returns the index of the element
 * @param {array} collection
 * @param {*} element
 * @param {{getValue:(element:*)=>string|number, isDescending: boolean}} options
 * @param options.getValue it should return the value used to order the collection
 * @param options.isDescending
 */
export const indexOfOrdered = (collection = [], element, options) => {
  if (element !== 0 && !element) {
    throw new Error('missing parameters');
  }
  const { length } = collection;
  if (!length) {
    return -1;
  }
  const { getValue = value => value, isDescending = false } = options;

  // as in each loop we discard the half of the results
  // in the worst case scenario we will loop a number of times
  // equal to n times such as 2^n > length
  const maxLoopsToResolve = Math.floor(Math.log2(length));
  // just in case something is wrong, we kill the loop when index is
  // out of boundaries
  const minBoundary = 0;
  const maxBoundary = length - 1;

  let index = Math.floor(length / 2);
  let loops = 0;
  let step;
  let min = minBoundary;
  let max = maxBoundary;
  while (loops <= maxLoopsToResolve && index < maxBoundary && index >= minBoundary) {
    if (getValue(collection[index]) === getValue(element)) {
      break;
    }
    const isToTheEnd = isDescending
      ? getValue(collection[index]) > getValue(element)
      : getValue(collection[index]) < getValue(element);
    if (isToTheEnd) {
      min = index + 1;
      step = Math.ceil((max - min) / 2);
    } else {
      max = index - 1;
      step = -Math.ceil((max - min) / 2);
    }
    if (min === max) {
      index = min;
      break;
    }
    index += step;
    loops += 1;
  }
  return index;
};

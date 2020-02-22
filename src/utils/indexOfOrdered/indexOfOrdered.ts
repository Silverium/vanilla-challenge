export const getSameValues = (collection: Array<any> = [], element: any, options: { getValue?: (element: any) => string | number; isDescending?: boolean;  isLastElement?: boolean} = {}) => {
  const { length } = collection;
  if (!length) return 0;
  const { getValue = (value: string|number) => value, isLastElement = false } = options;
  const minBoundary = 0;
  const maxBoundary = length - 1;

  const maxLoopsToResolve = Math.floor(Math.log2(length));
  const value = getValue(element);
  let index = Math.floor(length / 2);
  let loops = 0;
  let min = minBoundary;
  let max = maxBoundary;
  // check first element to the right with a value higher than the given one
  if (!isLastElement) {
    while (loops <= maxLoopsToResolve && index <= maxBoundary && index >= minBoundary) {
      if (getValue(collection[index]) === value) {
        // move to the right
        min = index;
        index += Math.ceil((max - min) / 2);
        if (max === index) {
          return min;
        }
      } else {
        // move to the left
        max = index;
        index -= Math.ceil((max - min) / 2);
        if (min === index) {
          return min;
        }
      }
      loops += 1;
    }
  }
  // isLastElement
  while (loops <= maxLoopsToResolve && index <= maxBoundary && index >= minBoundary) {
    if (getValue(collection[index]) === value) {
      // move to the left
      max = index;
      index -= Math.ceil((max - min) / 2);
      if (min === index) {
        return max;
      }
    } else {
      // move to the right
      min = index;
      index += Math.ceil((max - min) / 2);
      if (max === index) {
        return max;
      }
    }
    loops += 1;
  }
  return -1;
};
export const indexOfSimpleOrdered = (collection: Array<any> = [], element: any,  options: { getValue?: (element: any) => string | number; isDescending?: boolean;  isLastElement?: boolean} = {} ) => {
  if (element !== 0 && !element) {
    throw new Error('missing parameters');
  }
  const { length } = collection;
  if (!length) {
    return -1;
  }
  const { getValue = (value: string|number) => value, isDescending = false } = options;

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
  while (loops <= maxLoopsToResolve && index <= maxBoundary && index >= minBoundary) {
    if (getValue(collection[index]) === getValue(element)) {
      // find how many elements to the left exist with the same value and set min
      const sameValuesToLeft = getSameValues(collection.slice(min, index), element, {
        ...options,
        isLastElement: true,
      });
      // find how many elements to the right and set max
      const sameValuesToRight = getSameValues(collection.slice(index, max), element, {
        ...options,
        isLastElement: false,
      });
      // 1.1 no secondary condition => get the first one (last for descending)
      if (isDescending) {
        return index + sameValuesToRight;
      }
      return min + sameValuesToLeft;
      // TODO: 1.2 call this function withsecondary condition
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
};/**
 * Given an ordered collection of primitive values following the OrderBy condition,
 * it returns the index of the element
 * @param {array} collection
 * @param {*} element
 * @param {{getValue:(element:*)=>string|number, isDescending: boolean}} options
 * @param options.getValue it should return the value used to order the collection
 * @param options.isDescending
 */
export const indexOfOrdered = (collection: Array<any> = [], element: any, options: { getValue?: (element: any) => string | number; isDescending: boolean; }) => {
  if (element !== 0 && !element) {
    throw new Error('missing parameters');
  }
  const { length } = collection;
  if (!length) {
    return -1;
  }
  const optionsList = [].concat(options);
  let optionsIndex = 0;
  let result;
  while (!result && optionsIndex < optionsList.length) {
    if (optionsList.length === 1) {
      return indexOfSimpleOrdered(collection, element, optionsList[0]);
    }
    optionsIndex += 1;
  }
  return -1;
};

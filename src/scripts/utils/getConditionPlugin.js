// could be retrieved in any service
import { COMPARATORS } from '@/config';
// TODO: tests, accept paths and primitives
export const getConditionPlugin = () => {
  /**
   * Fetches the function to order an array of objects
   * @param {Comparator} comparator
   * @param {string} property Path to the property of the objects compared
   */
  const getCondition = (comparator, property) => {
    let meetsCondition;
    switch (comparator) {
      case COMPARATORS.greater:
        meetsCondition = (a, b) => a[property] < b[property];
        break;
      case COMPARATORS.smaller:
      default:
        meetsCondition = (a, b) => a[property] > b[property];

        break;
    }
    return meetsCondition;
  };
  return Object.freeze({
    getCondition,
  });
};

// could be retrieved in any service
import { COMPARATORS } from '../../../config';
import { Comparator } from '../../../types';
// TODO: tests, accept paths and primitives
// TODO: refactor and use similar approach like `indexOfOrdered` and use `getValue` and `isDescending`
export const getConditionPlugin = () => {
  /**
   * Fetches the function to order an array of objects
   * @param {Comparator} comparator
   * @param {string} property Path to the property of the objects compared
   */
  const getCondition = (comparator: any , property : string) => {
    let meetsCondition;
    switch (comparator) {
      case COMPARATORS.greater:
        meetsCondition = (a: { [x: string]: number; }, b: { [x: string]: number; }) => a[property] < b[property];
        break;
      case COMPARATORS.smaller:
      default:
        meetsCondition = (a: { [x: string]: number; }, b: { [x: string]: number; }) => a[property] > b[property];

        break;
    }
    return meetsCondition;
  };
  return Object.freeze({
    getCondition,
  });
};

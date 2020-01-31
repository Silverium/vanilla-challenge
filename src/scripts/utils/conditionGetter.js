// could be retrieved in any service
import { COMPARATORS } from '@/config';
// TODO: documentation
export const conditionGetter = () => {
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
    getCondition
  });
};

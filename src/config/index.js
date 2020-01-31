export const APPS_BY_HOST_RESULTS_NUMBER = 3;
export const COMPARATORS = {
  greater: 'greater',
  smaller: 'smaller'
};
export const APPS_ORDER_COMPARATOR = COMPARATORS.greater;
export const APPS_PROPERTY_TO_COMPARE = 'apdex';
export const APPS_ORDER_CONDITION = (a, b) => a.apdex < b.apdex;

export const APPS_BY_HOST_RESULTS_NUMBER = 25;
export const APPS_BY_HOST_DISPLAY_NUMBER = 5;
export const COMPARATORS = {
  greater: 'greater',
  smaller: 'smaller',
};
export const APPS_ORDER_COMPARATOR = COMPARATORS.greater;
export const APPS_PROPERTY_TO_COMPARE = 'apdex';
export const APPS_ORDER_CONDITION = (a: { apdex: number; }, b: { apdex: number; }) => a.apdex < b.apdex;

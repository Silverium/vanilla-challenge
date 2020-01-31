import { APPS_BY_HOST_RESULTS_NUMBER as resultsNumber } from '@/config';

export const topAppsByHostGetter = collection => {
  const getTopAppsByHost = hostName => {
    const data = collection.get(hostName);
    return data.slice(0, resultsNumber);
  };
  return Object.freeze({
    getTopAppsByHost
  });
};

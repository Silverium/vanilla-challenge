import { APPS_BY_HOST_RESULTS_NUMBER as resultsNumber } from '@/config';
/**
 *
 * @param {RankedAppsByHost} rankedAppsByHost
 */
export const getTopAppsByHostPlugin = rankedAppsByHost => {
  /**
   * Gets a slice of the RankedAppsByHost of the specified host. The
   * number of results can be set in `@/config`
   * @param {Host} hostName
   */
  const getTopAppsByHost = hostName => {
    const data = rankedAppsByHost.get(hostName);
    return data.slice(0, resultsNumber);
  };
  return Object.freeze({
    getTopAppsByHost,
  });
};

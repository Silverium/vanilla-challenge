import { APPS_BY_HOST_RESULTS_NUMBER as resultsNumber } from '../../../config';
import { RankedAppsByHost } from '../../../types';
/**
 *
 * @param {RankedAppsByHost} rankedAppsByHost
 */
export const getTopAppsByHostPlugin = (rankedAppsByHost: RankedAppsByHost) => {
  if (rankedAppsByHost.constructor.name !== 'Map') {
    throw new Error('Parameter needs to be of type Map class');
  }
  /**
   * Gets a slice of the RankedAppsByHost of the specified host. The
   * number of results can be set in `@/config`
   * @param {string} hostName
   */
  const getTopAppsByHost = (hostName: string) => {
    const data = rankedAppsByHost.get(hostName);
    return data?.slice(0, resultsNumber);
  };
  return Object.freeze({
    getTopAppsByHost,
  });
};

//  TODO: tests
/**
 * Composition function that adds one App to apdexByHost and to the list of Apps
 * Isolated Molecular factory
 * @param {AppData[]} list of Apps
 * @param {RankedAppsByHost} rankedAppsByHost ordered Map of Apps for each Host
 * @param {function} hostAppEntryDigester adds corresponding App (ordered by apdex) to each Host of apdexByHost Map
 */
export const addAppToHostsPlugin = (list, rankedAppsByHost, hostAppEntryDigester) => {
  if (!(list && rankedAppsByHost && hostAppEntryDigester)) {
    throw new Error('missing parameters');
  }
  /**
   * Calls hostAppEntryDigester to insert into the ranked array of AppData in each of the appData.host entries the `appData` received
   * @param {AppData} appData
   */
  const addAppToHosts = appData => {
    try {
      hostAppEntryDigester(rankedAppsByHost)(appData);
      list.push(appData); // this line represents persisting the data into the source
      return true;
    } catch (error) {
      console.error(error); // TODO: error manager (Sentry?)
      return false;
    }
  };
  return Object.freeze({
    addAppToHosts,
  });
};
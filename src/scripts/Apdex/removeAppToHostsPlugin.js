//  TODO: tests
/**
 * Composition function that removes one App from apdexByHost and from the list of Apps
 * Isolated Molecular factory
 * @param {AppData[]} list of Apps
 * @param {RankedAppsByHost} apdexByHost ordered Map of Apps for each Host
 * @param {function} hostAppEntryGarbager removes corresponding App (ordered by apdex) to each Host of apdexByHost Map
 */
export const removeAppToHostsPlugin = (list, apdexByHost, hostAppEntryGarbager) => {
  /**
   * Calls hostAppEntryGarbager to remove from the ranked array of AppData in each of the appData.host entries the `appData` received
   * @param {AppData} appData
   */
  const removeAppToHosts = appData => {
    try {
      hostAppEntryGarbager(apdexByHost)(appData);
      const index = list.indexOf(appData);
      list.splice(index, 1); // this line represents persisting the data into the source
      return appData; // returning the deleted element just in case it is needed later to be restored
    } catch (error) {
      console.error(error); // TODO: error manager (Sentry?)
      return false;
    }
  };
  return Object.freeze({
    removeAppToHosts,
  });
};

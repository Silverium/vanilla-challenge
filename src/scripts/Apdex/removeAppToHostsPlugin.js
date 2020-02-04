//  TODO: tests
/**
 * Composition function that removes one App from rankedAppsByHost and from the list of Apps
 * Isolated Molecular factory
 * @param {AppData[]} list of Apps
 * @param {RankedAppsByHost} rankedAppsByHost ordered Map of Apps for each Host
 * @param {function} hostAppEntryGarbager removes corresponding App (ordered by apdex) to each Host of rankedAppsByHost Map
 */
export const removeAppToHostsPlugin = (list, rankedAppsByHost, hostAppEntryGarbager) => {
  if (!(list && rankedAppsByHost && hostAppEntryGarbager)) {
    throw new Error('missing parameters');
  }
  /**
   * Calls hostAppEntryGarbager to remove from the ranked array of AppData in each of the appData.host entries the `appData` received
   * @param {AppData} appData
   */
  const removeAppToHosts = appData => {
    hostAppEntryGarbager(rankedAppsByHost)(appData);
    const index = list.indexOf(appData);
    list.splice(index, 1); // this line represents persisting the data into the source
    return appData; // returning the deleted element just in case it is needed later to be restored
  };
  return Object.freeze({
    removeAppToHosts,
  });
};

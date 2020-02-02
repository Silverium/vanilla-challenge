//  TODO: improve js-docs
/**
 * Composition function that removes one App from apdexByHost and from the list of Apps
 * Isolated Molecular factory
 * @returns {{removeAppToHosts:Function}} the object containing the function that does what's described above
 * @param {Array} list of Apps
 * @param {Map} apdexByHost ordered Map of Apps for each Host
 * @param {Function} hostAppEntryGarbager removes corresponding App (ordered by apdex) to each Host of apdexByHost Map
 */
export const appToHostsRemover = (list, apdexByHost, hostAppEntryGarbager) => {
  const removeAppToHosts = app => {
    try {
      hostAppEntryGarbager(apdexByHost)(app);
      const index = list.indexOf(app);
      list.splice(index, 1); // this line represents persisting the data into the source
      return app; // returning the deleted element just in case it is needed later to be restored
    } catch (error) {
      console.error(error); // TODO: error manager (Sentry?)
      return false;
    }
  };
  return Object.freeze({
    removeAppToHosts,
  });
};

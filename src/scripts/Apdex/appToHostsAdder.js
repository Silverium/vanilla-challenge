//  TODO: improve js-docs
/**
 * Composition function that adds one App to apdexByHost and to the list of Apps
 * Isolated Molecular factory
 * @returns {{addAppToHosts:Function}} the object containing the function that does what's described above
 * @param {Array} list of Apps
 * @param {Map} apdexByHost ordered Map of Apps for each Host
 * @param {Function} hostAppEntryDigester adds corresponding App (ordered by apdex) to each Host of apdexByHost Map
 */
export const appToHostsAdder = (list, apdexByHost, hostAppEntryDigester) => {
  const addAppToHosts = app => {
    try {
      hostAppEntryDigester(apdexByHost)(app);
      list.push(app); // this line represents persisting the data into the source
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

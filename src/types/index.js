/**
 * @typedef {string} Host The domain in which Apps are hosted
 * @typedef {string} Contributor Contributor of the App
 */

/**
 * @typedef AppData
 * @property {string} name
 * @property {Contributor[]} contributors
 * @property {number} version
 * @property {number} apdex
 * @property {Host[]} host
 */

/**
 * @typedef {Map<Host,AppData[]} RankedAppsByHost Contains a ranked list of AppData
 * based on the `condition` specified, for each Host.
 */

/**
 * @typedef {object} Comparator
 * @property {string} Comparator.greater Greater than (>)
 * @property {string} Comparator.lower Lower than (<)
 */

/**
 * @typedef {object} KeyValueAttribute
 * @property {string} KeyValueAttribute.key
 * @property {string} [KeyValueAttribute.value]
 */
/**
 * @typedef {(a,b)=>boolean} OrderBy
 */

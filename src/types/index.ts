/**
 * @typedef {string} Host The domain in which Apps are hosted
 * @typedef {string} Contributor Contributor of the App
 */

/**
 * @property {string} name
 * @property {string[]} contributors
 * @property {number} version
 * @property {number} apdex
 * @property {string[]} host
 */
export interface AppData {
  name : string
  Contributor : Array<string>
  version : number
  apdex : number
  host : Array<string>
}
/**
 * @typedef {Map<Host,AppData[]} RankedAppsByHost Contains a ranked list of AppData
 * based on the `condition` specified, for each Host.
 */
export interface RankedAppsByHost extends Map <string, AppData[]> {   }
/**
 * @typedef {object} Comparator
 * @property {string} Comparator.greater Greater than (>)
 * @property {string} Comparator.lower Lower than (<)
 */
export interface Comparator {
  greater: string
  lower : string
}

/**
 * @typedef {object} KeyValueAttribute
 * @property {string} KeyValueAttribute.key
 * @property {string} [KeyValueAttribute.value]
 */
/**
 * @typedef {(a,b)=>boolean} OrderBy
 */

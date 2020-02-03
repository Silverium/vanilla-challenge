/**
 * Given a KeyValueAttribute object, it returns an Html attribute-like string
 * that can be directly inserted in the opening tag
 *
 * @param {KeyValueAttribute} param0
 * ___
 *  * ### Example:
 *
 * {key: 'id', value: 'foo'} => `id="foo"`
 *
 * ### Usage:
 *
 * ```
 * const spanHtml = `<span ${setHtmlAttribute({key: 'id', value: 'foo'})}> bar </span>`;
 * ```
 * ### result:
 * spanHtml; // '<span id="foo"> bar </span>'
 *
 */
export const setHtmlAttribute = ({ key, value = '' }) => (value.trim() ? `${key}="${value}"` : key);

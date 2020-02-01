export const setHtmlAttribute = ({ key, value = '' }) => (value.trim() ? `${key}="${value}"` : key);

import { setHtmlAttribute } from '../utils';

export const templateTag = ({ content = '', attributes = [], tag = 'section' }) =>
  `
  <${tag} 
    ${attributes.map(setHtmlAttribute).join(' ')}
    >
    ${content}
  </${tag}>  
  `;

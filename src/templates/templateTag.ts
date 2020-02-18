import { setHtmlAttribute } from '../utils';

export const templateTag = ({ content = '', attributes = [] as any[], tag = 'section' }) =>
  `
  <${tag} 
    ${attributes.map(setHtmlAttribute).join(' ')}
    >
    ${content}
  </${tag}>  
  `;

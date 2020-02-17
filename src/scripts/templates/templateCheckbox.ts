import { setHtmlAttribute } from '../utils';

export const templateCheckbox = ({
  content = '',
  attributes = [] as any[],
  labelAttributes = [] as any[],
  name = 'inputName',
}) =>
  `
<label
  ${labelAttributes.map(setHtmlAttribute).join(' ')}
>
  <input
    type="checkbox" 
    name="${name}" 
    ${attributes.map(setHtmlAttribute).join(' ')}
  />  
  ${content}
</label>
  `;

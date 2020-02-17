import { setHtmlAttribute } from '../utils';
import { templateTag } from './templateTag';

export const templateInput = ({
  content = '',
  attributes = [] as any[],
  labelAttributes = [] as any[],
  wrapperAttributes = [] as any[],
  type = 'text',
  name = 'inputName',
  labelRight = false,
}) => {
  const labelHtml = `
<label
  for="${name}""
  ${labelAttributes.map(setHtmlAttribute).join(' ')}
>
  ${content}
</label>
`;
  const inputHtml = `
  <input
    type="${type}" 
    name="${name}" 
    ${attributes.map(setHtmlAttribute).join(' ')}
  />  
  `;
  return templateTag({
    content: labelRight ? inputHtml + labelHtml : labelHtml + inputHtml,
    attributes: wrapperAttributes,
  });
};

/**
 * Sets the `innerHtml` property of the html element with id=`id`
 * @param {string} id
 * @param {string} text
 */
export const setInnerHtml = (id: string, text: string) => {
  try {
    const element = document.getElementById(id);
    element.innerHTML = text;
    return text;
  } catch (error) {
    console.error(error);
    return false;
  }
};
/**
 * When initialised, appends to the document.body a (hidden by default) modal html element
 * with a header and a body, that can be modified through the corresponding methods
 */
export const modalSdk = () => {
  const modalId = 'newRelicModal';
  const headerId = 'newRelicModalHeader';
  const bodyId = 'newRelicModalBody';
  const closeId = 'newRelicModalClose';
  let modalNode = document.getElementById(modalId);
  const hide = () => {
    const none = 'none';
    try {
      modalNode.style.display = none;
      return none;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  const show = () => {
    const block = 'block';
    try {
      modalNode.style.display = block;
      return block;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  if (!modalNode) {
    modalNode = document.createElement('div');
    modalNode.id = modalId;
    modalNode.classList.add('modal');
    modalNode.innerHTML = `  
<div class="modal-content">
  <div class="modal-header">
    <span id="${closeId}" class="close">&times;</span>
    <h2 id="${headerId}"></h2>
  </div>
  <div  id="${bodyId}" class="modal-body">
  </div>
  </div>
</div>
`;
    document.body.appendChild(modalNode);
    // When the user clicks anywhere outside of the modal, close it
    const closeButton = document.getElementById(closeId);
    closeButton.onclick = hide;
    window.addEventListener('click', event => {
      if (event.target === modalNode) {
        hide();
      }
    });
  }
  const setBody = (text: string) => setInnerHtml(bodyId, text);
  const setHeader = (text: string) => setInnerHtml(headerId, text);

  return Object.freeze({
    hide,
    setBody,
    setHeader,
    show,
  });
};

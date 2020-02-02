export const setInnerHtml = (id, text) => {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = text;
  }
};
export const modalSdk = () => {
  const modalId = 'newRelicModal';
  const headerId = 'newRelicModalHeader';
  const bodyId = 'newRelicModalBody';
  const closeId = 'newRelicModalClose';
  let modalNode = document.getElementById(modalId);
  const hide = () => {
    modalNode.style.display = 'none';
  };
  const show = () => {
    modalNode.style.display = 'block';
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
  const setBody = text => setInnerHtml(bodyId, text);
  const setHeader = text => setInnerHtml(headerId, text);

  return {
    hide,
    setBody,
    setHeader,
    show,
  };
};

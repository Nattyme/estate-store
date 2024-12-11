import SingleItem from './singleItemModel';
import * as view from './singleItemView';

export default async function (state) {
  state.singleItem = new SingleItem(state.routeParams);
  await state.singleItem.getItem();

  // Render single card 
  view.render(state.singleItem.result);

 
  /* **********
  * Start event listeners
  ************ */
  const elements = {
    form: document.querySelector('.modal__form'),
    buttonOpen: document.querySelector('.button-order'),
    buttonClose: document.querySelector('.modal__close'),
    modalWrapper: document.querySelector('.modal-wrapper')
  }

  // Open modal
  elements.buttonOpen.addEventListener('click', ()=> view.showModal());

  // Click at overlay or buttons-close - close modal
  elements.modalWrapper.addEventListener('click', (e)=>{
    if ( !e.target.closest('.modal') || e.target === elements.buttonClose) {
      view.hideModal();    
    };
  });

  elements.form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = view.getInput();  // returns form values obj
    await state.singleItem.submitForm(formData);
  });
}

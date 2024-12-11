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
    descPanel: document.querySelector('.object__desc'),
    buttonOrder: document.querySelector('.button-order'),
    buttonClose: document.querySelector('.modal__close'),
    buttonFav: document.querySelector('#addToFavouriteBtn'),
    modalWrapper: document.querySelector('.modal-wrapper')
  }

  // Click at overlay or buttons-close - close modal
  elements.modalWrapper.addEventListener('click', async function(e) {
    // Close modal
    if ( !e.target.closest('.modal') || e.target === elements.buttonClose) view.hideModal();

    // Clicked submit in modal
    if (e.target.type === 'submit' && e.target !== elements.buttonClose) {
      e.preventDefault();

      const formData = view.getInput();  // returns form values obj
      await state.singleItem.submitForm(formData);
      const response = state.singleItem.response;

      // Case success
      if( response.message === 'Bid Created') {
        alert('Ваша заявка успешно получена');
        view.hideModal();
        view.clearInput();
      } 
      
      // Case error
      if (response.message === 'Bid Not Created') {
        response.errors.forEach( item => alert(item));
      }
    }

  });

  elements.descPanel.addEventListener('click', (e) => {
    // Open modal
    if(e.target === elements.buttonOrder) view.showModal();

    // Add or remove form favs
    if(e.target === elements.buttonFav) {
      console.log('clicked FAV');  
      state.favourites.toggleFav(state.singleItem.id);
    }
  
  });

}

import SingleItem from './singleItemModel';
import * as view from './singleItemView';

export default async function (state) {
  state.singleItem = new SingleItem(state.routeParams);
  await state.singleItem.getItem();

  // Render single card 
  view.render(state.singleItem.result, state.favourites.isFav(state.singleItem.id), state.settings.priceSet);

  /* **********
  * Start event listeners
  ************ */
  const elements = {
    form: document.querySelector('.modal__form'),
    descPanel: document.querySelector('.object__desc'),
    buttonOrder: document.querySelector('.button-order'),
    buttonClose: document.querySelector('.modal__close'),
    modalWrapper: document.querySelector('.modal-wrapper')
  }

  const displayMessage = function (response) {
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

      // Display error or success message
      displayMessage(response);
    }

  });

  elements.descPanel.addEventListener('click', (e) => {
    // Open modal
    if(e.target === elements.buttonOrder) view.showModal();

    // Add or remove form favs
    if(e.target.closest('#addToFavouriteBtn')) {  
      state.favourites.toggleFav(state.singleItem.id);
      view.toggleFavouriteButton(state.favourites.isFav(state.singleItem.id));
    }
  
  });
  

}

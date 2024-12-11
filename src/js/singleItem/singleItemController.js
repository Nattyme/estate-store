import SingleItem from './singleItemModel';
import * as view from './singleItemView';

export default async function (state) {
  console.log('single item contoller start');
  
  state.singleItem = new SingleItem(state.routeParams);
  await state.singleItem.getItem();

  // Render single card 
  view.render(state.singleItem.result);

  /* **********
  * Start event listen
  ************ */

  // Open modal
  document.querySelector('.button-order').addEventListener('click', ()=>{
    view.showModal();    
  });

  // Close modal if 'buttons-close' is clicked
  document.querySelector('.modal__close').addEventListener('click', ()=>{
    view.hideModal();    
  });

  // Clode mode if overlay is clicked
  document.querySelector('.modal-wrapper').addEventListener('click', (e)=>{
    if ( !e.target.closest('.modal')) {
      view.hideModal();    
    };
  });
}

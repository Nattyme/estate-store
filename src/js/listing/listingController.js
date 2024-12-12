import * as view from './listingView';

export default function (state) {

  // Cards container render
  view.render();

  // Cards render
  state.results.forEach( (item) => {
    view.renderCard(item, state.favourites.isFav(item.id));
  });

  state.emitter.subscribe('event:render-listing', ()=>{
    // Clear cords container
    view.clearListingContainer();

    // Cards render
    state.results.forEach( (item) => {
      view.renderCard(item);
    });
  });

  state.emitter.subscribe('event:reset-listing', ()=> {
    // Clear cords container
    view.clearListingContainer();

    // Cards render
    state.results.forEach( (item) => {
      view.renderCard(item);
    });

  });

  Array.from( document.getElementsByClassName('card__like')).forEach( (item)=>{
    item.addEventListener('click', (e)=> {
      e.preventDefault();
      console.log('clicked fav');
      
      // Finde id of a clicked obj
      const currentId = e.target.closest('.card').dataset.id;
      
      // Add or remove fav in storage
      state.favourites.toggleFav(currentId);
      
      // Turn fav icon on or off
      view.toggleFavIcon(e.target.closest('.card__like'), state.favourites.isFav(currentId));
      
    });
  });
  
}
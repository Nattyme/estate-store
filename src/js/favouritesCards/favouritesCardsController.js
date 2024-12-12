import FavouritesCards from './favouritesCardsModel';
import * as view from './favouritesCardsView';

export default async function (state) {

  // Get list of favs items
  const favsList = state.favourites.favs;
  const favouriteCards = new FavouritesCards(favsList);
  await favouriteCards.getFavs();

  // Render container and fav ccards
  view.renderPage(favouriteCards.cards, state.settings.priceSet);

  // Function works with 'add to favs' icons
  const  addToFavListener = function () {
    Array.from( document.getElementsByClassName('card__like')).forEach( (item)=>{
      item.addEventListener('click', (e)=> {
        e.preventDefault();
  
        // Finde id of a clicked obj
        const currentId = e.target.closest('.card').dataset.id;
        
        // Add or remove fav in storage
        state.favourites.toggleFav(currentId);
        
        // Turn fav icon on or off
        view.toggleFavIcon(e.target.closest('.card__like'), state.favourites.isFav(currentId));
        
      });
    });
  }

  // Start listen click at 'add to fav' icon
  addToFavListener();
}
import FavouritesCards from './favouritesCardsModel';
import * as view from './favouritesCardsView';

export default async function (state) {

  // Get list of favs items
  const favsList = state.favourites.favs;
  const favouriteCards = new FavouritesCards(favsList);
  await favouriteCards.getFavs();

  // Render container and fav ccards
  view.renderPage(favouriteCards.cards);
}
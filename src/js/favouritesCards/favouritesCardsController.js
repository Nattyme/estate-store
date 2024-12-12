import FavouritesCards from './favouritesCardsModel';

export default async function (state) {

  // Get list of favs items
  const favsList = state.favourites.favs;
  const favouriteCards = new FavouritesCards(favsList);
  await favouriteCards.getFavs();
}
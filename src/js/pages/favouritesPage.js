import favouritesCards from './../favouritesCards/favouritesCardsController';

export default function () {
  // Clean container
  document.querySelector('#app').innerHTML = '';

  favouritesCards(state);
}
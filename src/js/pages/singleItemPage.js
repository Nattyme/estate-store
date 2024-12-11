import singleItem from './../singleItem/singleItemController';

export default function (state) {
  // Clear app container
  document.querySelector('#app').innerHTML = '';

  // Start Single item component
  singleItem(state);
}
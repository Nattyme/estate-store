import bids from './../bids/bids.controller';

export default function () {
  // Clean container app
  document.querySelector('#app').innerHTML = '';

  // Start bids component
  bids();
}
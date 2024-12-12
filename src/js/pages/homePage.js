import filter from './../filter/filterController';
import listing from './../listing/listingController';

export default async function (state) {
  // Clean container
  document.querySelector('#app').innerHTML = '';
  
  await filter(state); // finish filter firstly!
  listing(state);
}


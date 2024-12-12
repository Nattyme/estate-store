import * as view from './listingView';

export default function (state) {
  console.log('Component listing start');
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
  
}
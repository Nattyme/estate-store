import * as view from './bidsView';
import Bids from './bidsModel';

export default async function (state) {
  
  // Create a model object to work with bids
  if (!state.bids) state.bids = new Bids();

  // Get bids from the server
  await state.bids.getBids();

  view.renderBids(state.bids.bids);
    
}
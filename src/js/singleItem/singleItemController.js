import SingleItem from './singleItemModel';
import * as view from './singleItemView';

export default function (state) {
  console.log('single item contoller start');
  
  state.singleItem = new SingleItem(state.routeParams);
  state.singleItem.getItem();

  // Render single card 
  view.render();
}
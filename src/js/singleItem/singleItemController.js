import SingleItem from './singleItemModel';
import * as view from './singleItemView';

export default async function (state) {
  console.log('single item contoller start');
  
  state.singleItem = new SingleItem(state.routeParams);
  await state.singleItem.getItem();

  // Render single card 
  view.render(state.singleItem.result);
}
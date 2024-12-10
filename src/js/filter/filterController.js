import Filter from './filterModel';
import * as view from './filterView';

export default function (state) {
  // view.render();

  // Create filter obj
  if (!state.filter) state.filter = new Filter();

  // Get params for filter
  state.filter.getParams();
}
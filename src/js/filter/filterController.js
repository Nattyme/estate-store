import Filter from './filterModel';
import * as view from './filterView';

export default async function (state) {
  // Create filter obj
  if (!state.filter) state.filter = new Filter();

  // Get params for filter
  await state.filter.getParams();

  // Render filter
  view.render(state.filter.params);

  // Request to server
  await state.filter.getResults();

  // Update button counter
  view.changeButtonText(state.filter.result.length);
}
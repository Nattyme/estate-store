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

  // Form events listener
  const form = document.querySelector('#filter-form');
  const inputs = form.querySelectorAll('.range__input');

  form.addEventListener('change', function (e) {
    e.preventDefault();
    state.filter.query = view.getInput();
    console.log( state.filter.query);
    
  });

  inputs.forEach( (input) => {
    input.addEventListener('keyup', function () {
    });
  });
}
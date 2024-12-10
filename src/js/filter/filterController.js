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

  // Find form element
  const form = document.querySelector('#filter-form');

  // Form change listening
  form.addEventListener('change', async function (e) {
    e.preventDefault();
    state.filter.query = view.getInput();
    await state.filter.getResults();

    state.results = state.filter.result;

    // update text in button
    view.changeButtonText(state.filter.result.length);
  });

  // Form reset listening
  form.addEventListener('reset', async function () {
    state.filter.query = '';
    await state.filter.getResults();

    view.changeButtonText(state.filter.result.length);
  });

  //Form submit listening
  form.addEventListener('submit', function (e) {
    e.preventDefault(e);
    console.log('submit');
    state.emitter.emit('event:render-listing', {} );
  });

  // const inputs = form.querySelectorAll('.range__input');
  // inputs.forEach( (input) => {
  //   input.addEventListener('keyup', function () {
  //   });
  // });
}
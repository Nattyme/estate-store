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
  state.results = state.filter.result;

  // Update button counter
  view.changeButtonText(state.filter.result.length);

  // Find form element
  const form = document.querySelector('#filter-form');



  const filterChanged = async function (e) {
    e.preventDefault();
    state.filter.query = view.getInput();
    await state.filter.getResults();

    state.results = state.filter.result;

    // update text in button
    view.changeButtonText(state.filter.result.length);
  }

  const filterReset = async function () {
    state.filter.query = '';

    await state.filter.getResults();
    state.results = state.filter.result; // update state.results

    view.changeButtonText(state.filter.result.length); 
    
    state.emitter.emit('event:reset-listing', {} ); // emit to update cards render
  }

  const filterSubmit = function (e) {
    e.preventDefault(e);
    state.emitter.emit('event:render-listing', {} );
  }

  const initEventListeners = function () {

    // Filter change listening
    form.addEventListener('change', (e) => filterChanged(e));

    // Filter reset listening
    form.addEventListener('reset', (e) => filterReset(e));

    // Filter submit listening
    form.addEventListener('submit', (e) => filterSubmit(e));

     // Filter input change listening
    // const inputs = form.querySelectorAll('.range__input');
    // inputs.forEach( (input) => {
    //   input.addEventListener('keyup', (e) => filterChanged(e));
    //   state.emitter.emit('event:render-listing', {} );
    // });
  }



  // Start listening events
  initEventListeners();
}
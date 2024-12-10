import * as view from './listingView';

export default function (state) {
  console.log('Component listing start');
  view.render();

  state.emitter.subscribe('event:render-listing', ()=>{
    console.log(state.results);
    
  });
  
}
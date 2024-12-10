export default function (state) {
  console.log('Component listing start');
  state.emitter.subscribe('event:render-listing', ()=>{
    console.log(state.results);
    
  });
  
}
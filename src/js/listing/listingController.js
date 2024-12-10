export default function () {
  console.log('Component listing start');
  state.emitter.subscribe('event:render-listing', ()=>{
    console.log('Function started');
    
  });
  
}
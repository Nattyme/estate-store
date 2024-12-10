export function render () {
  const markup = `<div class="cards-wrapper">
                    <div class="container p-0">

                      <div class="row">
                        <h1>КАРТОЧКА</h1>
                      </div>
        
                    </div>
                  </div>`;
  document.querySelector('#app').insertAdjacentHTML('beforeend', markup);
}
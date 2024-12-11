export function renderContainer () {
  const markup = `
      <div class="container p-0 mb-5">
        <div class="heading-1">Заявки</div>
      </div>

      <div class="panels-wrapper">
          <div class="container p-0">
          <!-- Bids'll be here -->
          </div>
      </div>`;

  document.querySelector('#app').insertAdjacentHTML('afterbegin', markup);
}
export default function paginationRender() {
  const markup = `<div class="section-pagination__item">ПАГИНАЦИЯ</div>`;
  document.querySelector('#app').insertAdjacentHTML('afterend', markup);
}

function buttonPrev () {
  const markup = `<a class="pagination-button" href="">назад</a>`;
}

function buttonNext () {
  const markup = ` <div class="section-pagination__item">
    <a class="pagination-button" href="">
      вперед
    </a>
  </div>`;
}
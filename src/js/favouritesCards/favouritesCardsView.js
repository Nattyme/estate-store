function renderContainer() {
  const markup = `<div class="container p-0 mb-5">
                      <div class="heading-1">Избранное</div>
                  </div>

                  <div class="cards-wrapper">
                    <div class="container p-0">
                      <div class="row" id="cardsHolder">
                      <!-- cards'll be here -->
                      </div>
                    </div>
                  </div>`;

  document.querySelector('#app').insertAdjacentHTML('afterbegin', markup);
}

export function renderPage (cards, priceSet) {
  renderContainer();

  cards.forEach(card => {
    renderCard(card, priceSet);
  });
}

function renderCard(object, priceSet) {
  const cardsContainer = document.querySelector('#cardsHolder');

  const markup = `<article class="col-md-4">
                            
                    <a href="#/item/${object.id}" class="card" data-id="${object.id}">
                        <div class="card__header">
                            <div class="card__title">
                                ЖК ${object.complex_name}
                            </div>
                            <div class="card__like card__like--active">
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="card__img">
                            <img src="${object.image}" alt="План квартиры" />
                        </div>
                        <div class="card__desc">
                            <div class="card__price">
                                <div class="card__price-total">
                                    ${priceSet(object.price_total)}
                                </div>
                                <div class="card__price-per-meter">
                                    ${priceSet(object.price_sq_m)} /м2
                                </div>
                            </div>

                            <div class="card__params params">
                                <div class="params__item">
                                    <div class="params__definition">
                                        Комнат
                                    </div>
                                    <div class="params__value">${object.rooms}</div>
                                </div>
                                <div class="params__item">
                                    <div class="params__definition">
                                        Площадь
                                    </div>
                                    <div class="params__value">${object.square}</div>
                                </div>
                            </div>
                  
                        </div>
                        <div class="card__footer">
                            <div class="card__art">${object.scu}</div>
                            <div class="card__floor">Этаж ${object.floor} из ${object.floors_total}</div>
                        </div>
                    </a>
                    
                  </article>`;

  cardsContainer.insertAdjacentHTML('beforeend', markup);
}

export function toggleFavIcon (elementIcon, isFav) {
  if (isFav) {
    elementIcon.classList.add('card__like--active');
  } else {
    elementIcon.classList.remove('card__like--active');

  }
}
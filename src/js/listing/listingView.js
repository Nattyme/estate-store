export function render () {
  const markup = `<div class="cards-wrapper">
                    <div class="container p-0 pt-5">

                      <div id="listingContainer" class="row"></div>
        
                    </div>
                  </div>`;
  document.querySelector('#app').insertAdjacentHTML('beforeend', markup);
}

export function renderCard(object, isFav) {
  const listingContainer = document.querySelector('#listingContainer');
  const priceFormatter = function (number) {
    return number.toLocaleString('ru-RU', { 
      style: 'currency', 
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0 
    });
  }

  const markup = `<article class="col-md-4">
                            
                    <a href="#/item/${object.id}" class="card" data-id="${object.id}">
                        <div class="card__header">
                            <div class="card__title">
                                ЖК ${object.complex_name}
                            </div>
                            <div class="
                                    card__like
                                    ${isFav ? 'card__like--active' : ''}
                                  "
                            >
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="card__img">
                            <img src="${object.image}" alt="План квартиры" />
                        </div>
                        <div class="card__desc">
                            <div class="card__price">
                                <div class="card__price-total">
                                    ${priceFormatter(Number(object.price_total))}
                                  
                                </div>
                                <div class="card__price-per-meter">
                                    ${object.price_sq_m} ₽/м2
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

  listingContainer.insertAdjacentHTML('beforeend', markup);
}

export function clearListingContainer () {
  const listingContainer = document.querySelector('#listingContainer');
  listingContainer.innerHTML = '';

}

export function toggleFavIcon (elementIcon, isFav) {
  if (isFav) {
    elementIcon.classList.add('card__like--active');
  } else {
    elementIcon.classList.remove('card__like--active');

  }
}
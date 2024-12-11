export function render (object) {
  console.log(object);
  
  const appContainer = document.querySelector('#app');
  const markup = `
            <div class="container p-0 pt-5">
                <div class="heading-1">
                    ${object.title}, ${object.square} м2 за ${object.price_total} ₽
                </div>

                <div class="object">
                    <div class="object__photo">
                        <div class="object__photo-wrapper">
                            <img src="${object.image}" alt="Схема ${object.title}" />
                        </div>
                    </div>

                    <div class="object__desc">
                        <div class="object__desc-sector">
                            ЖК ${object.complex_name}
                        </div>

                        <div class="object__desc-name">
                            <div class="object__desc-title">
                              ${object.title}
                            </div>
                            <div class="object__desc-art">${object.scu}</div>

                            <button class="button-favourite">
                                <i class="fas fa-heart"></i> <span>В избранное</span>
                            </button>

                            <button class="button-favourite button-favourite--active">
                                <i class="fas fa-heart"></i> <span>В избранном</span>
                            </button>

                        </div>

                        <div class="object__desc-details">
                       
                            <div class="params">
                                <div class="params__item">
                                    <div class="params__definition">${object.building}</div>
                                    <div class="params__value">3</div>
                                </div>
                                <div class="params__item">
                                    <div class="params__definition">Этаж</div>
                                    <div class="params__value">${object.floor}</div>
                                </div>
                                <div class="params__item">
                                    <div class="params__definition">Номер</div>
                                    <div class="params__value">${object.flat_number}</div>
                                </div>
                                <div class="params__item">
                                    <div class="params__definition">Комнат</div>
                                    <div class="params__value">${object.rooms}</div>
                                </div>
                            </div>
                   
                        </div>

                        <div class="details">
                            <div class="details__row">
                                <div class="details__name">Стоимость</div>
                                <div
                                    class="details__value details__value--price"
                                >
                                   ${object.price_total} ₽
                                </div>
                            </div>
                            <div class="details__row">
                                <div class="details__name">Цена за м2</div>
                                <div class="details__value">${object.price_sq_m} ₽/м2</div>
                            </div>
                            <div class="details__row">
                                <div class="details__name">Площадь</div>
                                <div class="details__value">${object.square} м2</div>
                            </div>
                        </div>

                        <button class="button-order">Забронировать</button>
                        <!-- <button class="button-preview">Записаться на просмотр</button> -->
                    </div>
                  
                </div>
                
            </div>

            <div class="container p-0">
                <a href="/" class="back-to-results"> ← Вернуться к результатам поиска </a>
            </div>`;
  
  appContainer.insertAdjacentHTML('beforeend', markup);
}
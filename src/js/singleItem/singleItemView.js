export function render (object, isFav, priceSet) {
  const appContainer = document.querySelector('#app');
  const markup = `
            <div class="container p-0 pt-5">
                <div class="heading-1">
                    ${object.title}, ${object.square} м2 за ${priceSet(object.price_total)} 
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

                            <button id="addToFavouriteBtn" 
                              class="
                                button-favourite
                                ${isFav ? 'button-favourite--active' : ''}
                              "
                            >
                              <i class="fas fa-heart"></i> 
                              <span>
                                ${isFav ? 'В избранном' : 'В избранное'}
                              </span>
                            </button>

                        </div>

                        <div class="object__desc-details">
                       
                            <div class="params">
                                <div class="params__item">
                                    <div class="params__definition">Корпус</div>
                                    <div class="params__value">${object.building}</div>
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
                                   ${priceSet(object.price_total)}
                                </div>
                            </div>
                            <div class="details__row">
                                <div class="details__name">Цена за м2</div>
                                <div class="details__value">${priceSet(object.price_sq_m)} /м2</div>
                            </div>
                            <div class="details__row">
                                <div class="details__name">Площадь</div>
                                <div class="details__value">${object.square} м2</div>
                            </div>
                        </div>

                        <button type="submit" class="button-order">Забронировать</button>
                        <!-- <button class="button-preview">Записаться на просмотр</button> -->
                    </div>
                  
                </div>
                
            </div>

            <div class="container p-0">
                <a href="/" class="back-to-results"> ← Вернуться к результатам поиска </a>
            </div>`;
  console.log(object);
  const markupModal = `
                        <div class="modal-wrapper none">
                            <div class="modal">
                                <div class="modal__header">
                                    <div class="modal__title">
                                        Заявка на бронирование
                                    </div>
                                    <div class="modal__details">
                                        Квартира <span>${object.flat_number}</span> в ЖК ${object.complex_name} Дом ${object.building}
                                        <div class="modal__details-art">${object.scu}</div>
                                    </div>
                                </div>

                                <form class="modal__form">
                                    <div class="modal__form-content">
                                        <!-- formgroup -->
                                        <div class="formgroup">
                                            <label
                                                class="modal__form-input-label"
                                                for="form-phone"
                                            >
                                                Имя
                                            </label>
                                            <input
                                                type="text"
                                                id="form-name"
                                                class="modal__form-input"
                                                placeholder="Введите имя"
                                            />
                                        </div>
                                        <!-- // formgroup -->
                                        <!-- formgroup -->
                                        <div class="formgroup">
                                            <label
                                                class="modal__form-input-label"
                                                for="form-phone"
                                            >
                                                Телефон
                                            </label>
                                            <input
                                                type="text"
                                                id="form-phone"
                                                class="modal__form-input"
                                                placeholder="+7 (XXX) XXX-XX-XX"
                                            />
                                        </div>
                                        <!-- // formgroup -->

                                        <div class="formgroup formgroup--checkbox">
                                            <input type="checkbox" id="policy" checked />
                                            <label class="policy-text" for="policy"
                                                >Я согласен на обработку моих персональных
                                                данных. С Политикой в отношении обработки
                                                персональных данных ознакомлен и
                                                согласен.</label
                                            >
                                        </div>
                                    </div>
                                    <input
                                        class="modal__submit"
                                        type="submit"
                                        value="Отправить заявку"
                                    />
                                </form>
                                <button class="modal__close">
                                    Закрыть
                                </button>
                            </div>
                        </div>`;

  appContainer.insertAdjacentHTML('beforeend', markup);
  appContainer.insertAdjacentHTML('beforeend', markupModal); // modal is hidden for the start
}

export function showModal () {
  document.querySelector('.modal-wrapper').classList.remove('none');
}

export function hideModal () {
  document.querySelector('.modal-wrapper').classList.add('none')
}

// Collect form data and returns it as an object
export function getInput() {
  const formData = {};

  const elements = getElements();

  formData.name = elements.name.value;
  formData.phone = elements.phone.value;

  return formData;
}

export function clearInput () {
  const elements = getElements();

  elements.name.value = '';
  elements.phone.value = '';
}

function getElements() {
  // Form elems
 return {
   name: document.querySelector('#form-name'),
   phone: document.querySelector('#form-phone')
 }

}

export function toggleFavouriteButton(isFav) {
  const btn = document.querySelector('#addToFavouriteBtn');
  if(isFav) {
    btn.classList.add('button-favourite--active');
    btn.querySelector('span').textContent = 'В избранном';
  } else {
    btn.classList.remove('button-favourite--active');
    btn.querySelector('span').textContent = 'В избранном';
  }
}
export default class Settings {
  constructor () {
    this.pages = []
  }

  priceSet (number) {
    return Number(number).toLocaleString('ru-RU', { 
      style: 'currency', 
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0 
    });
  }

}
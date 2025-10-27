import Settings from './../utils/Settings';

export default class Pagination {
  constructor (itemsTotal, itemsOnPage) {
    this.itemsTotal = itemsTotal;
    this.itemsOnPage = itemsOnPage;
    this.totalPages = this.itemsTotal / this.itemsOnPage;
  }
}
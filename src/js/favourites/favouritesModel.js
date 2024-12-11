export default class Favourites {
  constructor() {
    this.favs = [];
    // Local storage 
  }

  addFav(id) {
    this.favs.push(id);
  }
}
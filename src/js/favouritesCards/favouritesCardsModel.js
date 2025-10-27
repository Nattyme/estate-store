export default class FavouritesCards {
  constructor (favsList) {
    this.favsList = favsList;
  }

  async getFavs() {
    try {
      const ids = this.favsList.toString(); // 1, 2, 3

      if(ids) {
        const queryString = `https://jsproject.webcademy.ru/items?ids=${ids}`;
        const result = await fetch(queryString);
        const data = await result.json();
  
        this.cards = await data;
      }
    }
    catch (error) {
      alert(error);
      
    }
 
  }
}
export default class Pantry {
  constructor () {
    this.stock = {};
    this.ingredients = {};
    this.shoppingList = {};
  }
  stockCheck(pantryItem) {
    console.log(pantryItem + "-------------------")
    return (this.stock[pantryItem] || 0);
  }
  restock(pantryItem, quantity) {
    this.stock[pantryItem] = quantity;
  }
  addToShoppingList(recipe) {
    recipe.ingredients.forEach(function (ing) {

    })
  }

}

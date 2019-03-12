import { expect } from "chai"
import Pantry from "../lib/pantry"
import Recipe from "../lib/recipe"

describe("Pantry", function() {
  it('has a stock', () => {
    var pantry = new Pantry();
    expect(pantry.stock).to.eql({});
  });
  it('stockCheck()', function(){
    var pantry = new Pantry();
    expect(pantry.stockCheck("Cheese")).to.eql(0)
  });
  it('restock()', function(){
    var pantry = new Pantry();
    pantry.restock("Cheese", 10);
    expect(pantry.stock).to.eql({Cheese: 10});
    expect(pantry.stockCheck("Cheese")).to.eql(10);
  });
  it('ingredients', function(){
    var pantry = new Pantry();
    expect(pantry.ingredients).to.eql({});
  });

  it('addToShoppingList', function(){
    const recipe = new Recipe("Cheese Pizza")
    const pantry = new Pantry();

    recipe.addIngredient("Cheese", 20);
    recipe.addIngredient("Flour", 20);
    expect(recipe.ingredients).to.eql({Cheese:20, Flour:20})
    pantry.addToShoppingList(recipe)
    expect(pantry.shoppingList).to.eql({Cheese:20, Flour:20})
  });
});

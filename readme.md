# OOJS Starter Kit

Let's get object-oriented in JavaScript-land!

## Setup

* Clone and `cd` into this repo.
* `npm install`
* `npm test`
  * You should see 7 passing tests.

## Your Job

Complete this challenge from the Mod1 final assessment, but this time using JavaScript!

### Iteration 1: Pantry Stocking

Build a simple Pantry-tracking program that can store a list of ingredients and available
quantities. Once we have tracked our ingredients and quantities, we'll use the Recipe class
we built before to have the pantry prepare a shopping list for us.

Support the following interactions:

```js
const pantry = new Pantry()
// => Pantry {...}

// Checking and adding stock
pantry.stock
// => {}

pantry.stockCheck("Cheese")
// => 0

pantry.restock("Cheese", 10)

pantry.stock
// => { "Cheese": 10 }

pantry.stockCheck("Cheese")
// => 10

pantry.restock("Cheese", 20)
pantry.stockCheck("Cheese")
// => 30
```

### Iteration 2: Shopping List

Add a feature to your pantry to generate a shopping list for a collection of recipes.

We'll follow this interaction pattern:

```js
const pantry = new Pantry()
// => Pantry {...}

// Building our recipe
const r = new Recipe("Cheese Pizza")
// => Recipe {...}

r.ingredients
// => {}

r.addIngredient("Cheese", 20)
r.addIngredient("Flour", 20)

r.ingredients
// => {"Cheese": 20, "Flour": 20}

// Adding the recipe to the shopping list
pantry.addToShoppingList(r)

// Checking the shopping list
pantry.shoppingList // => { "Cheese": 20, "Flour": 20 }

// Adding another recipe
const r = new Recipe("Spaghetti")
r.addIngredient("Noodles", 10)
r.addIngredient("Sauce", 10)
r.addIngredient("Cheese", 5)
pantry.addToShoppingList(r)

// Checking the shopping list
pantry.shoppingList // => {"Cheese": 25, "Flour": 20, "Noodles": 10, "Sauce": 10}
```


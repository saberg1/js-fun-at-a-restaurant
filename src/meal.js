function nameMenuItem(x) {
  return 'Delicious ' + x
}

function createMenuItem(x,y,z) {
  var menuItem = {
  name: x,
  price: y,
  type: z,
  }
  return menuItem
}

function addIngredients(x, ingredients) {
 if (ingredients.includes(x)){
  return ingredients
 }else
  ingredients.push(x)
}

function formatPrice(x) {
  return '$' + x
}

function decreasePrice(x) {
 return x - (x * .1)
}

function createRecipe(title, ingredients, type) {
  return recipe = {
  title,
  ingredients,
  type,
  }
}




module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}



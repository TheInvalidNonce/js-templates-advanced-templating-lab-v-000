function init() {
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
  
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  
  let form = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  
  document.getElementsByTagName('main')[0].innerHTML = form({'submitAction' : 'createRecipe()'});
    
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  let name = document.getElementById('name').value;
  let description = document.getElementById('description').value;
  let ingredientNodelist = document.getElementsByName('ingredients');
  let ingredients = [];
  
  for (let i in ingredientNodelist) {
    if (ingredientNodelist[i].value !== undefined) {
      ingredients.push(ingredientNodelist[i].value)
    }
  }
  
  let recipe = {
    'name': name,
    'description': description,
    'ingredients': ingredients
  }
  
  let template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  
  document.getElementById('main').innerHTML = template(recipe);
}

function displayEditForm() {
  let name = document.getElementById('nameHeader').innerText;
  let description = document.getElementById('recipeDescription').innerText;
  let ingredientsList = document.getElementsByName('ingredientsList');
  let ingredients = [];
  
  for (let i in ingredientsList) {
      ingredients.push(ingredientsList[i].innerText)
  }
  
  let recipe = {
    'name' : name,
    'description' : description,
    'ingredients' : ingredients,
    'submitAction' : 'updateRecipe()'
  }
  
  let template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  
  document.getElementById('main').innerHTML = template(recipe);
}

function updateRecipe() {
  let name = document.getElementById('name').value;
  let description = document.getElementById('description').value;
  let ingredientNodelist = document.getElementsByName('ingredients');
  let ingredients = [];
  
  for (let i in ingredientNodelist) {
    if (ingredientNodelist[i].value !== undefined) {
      ingredients.push(ingredientNodelist[i].value)
    }
  }
  
  let recipe = {
    'name': name,
    'description': description,
    'ingredients': ingredients
  }
 
  let template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
 
  document.getElementById('main').innerHTML = template(recipe)
}
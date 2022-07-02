const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = option;

  return itemEl
})

ingredientsList.append(...elements)
console.log(...elements)






// const firstEl = document.createElement('li');
// firstEl.classList.add('item');
// firstEl.textContent = 'Potatoes';

// const navEl = document.querySelector('#ingredients');
// navEl.appendChild(firstEl);

// console.log(navEl)

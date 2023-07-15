// Hamburger options
const bunTypes = ["sesame", "whole wheat", "brioche", "tex-max","ciabatta"];
const vegetableGarnishes = ["lettuce", "tomato", "onion", "pickles","Jalapenos"];
const cheeses = ["cheddar", "swiss", "smoked cheddar", "mozzarella"];
const sauces = ["ketchup", "mayonnaise", "mustard", "barbecue","relish"];
const meatPatties = ["beef", "chicken", "vegetarian"];
const pattyQuantities = ["single", "double","triple"];
const toppings = ["pickles", "hot peppers", "olives","italian seasoning"];

// Function to create a random hamburger
function createHamburger() {
  const bun = getRandomOption(bunTypes);
  const garnish = getRandomOption(vegetableGarnishes);
  const cheese = getRandomOption(cheeses);
  const sauce = getRandomOption(sauces);
  const patty = getRandomOption(meatPatties);
  const quantity = getRandomOption(pattyQuantities);
  const extraToppings = getRandomToppings();

  const hamburgerDescription = `Enjoy your ${quantity} ${patty} patty hamburger on a ${bun} bun with ${garnish} as garnish with ${cheese} cheese and ${sauce} as a sauce on both bases on bun, and ${extraToppings} as a extra topping. Have a great day!`;

  document.getElementById("hamburgerDescription").textContent = hamburgerDescription;
}

// Helper function to get a random option from an array
function getRandomOption(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Helper function to get a random number of extra toppings
function getRandomToppings() {
  const randomQuantity = Math.floor(Math.random() * toppings.length);
  const randomToppings = [];
  for (let i = 0; i < randomQuantity; i++) {
    const topping = getRandomOption(toppings);
    randomToppings.push(topping);
  }
  return randomToppings.join(", ");
}

// Create a random hamburger when the page loads
createHamburger();

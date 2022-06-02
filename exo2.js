let summerMenu = [
  {
    name: "Margarita",
    prices: {
      medium: 6.0,
      large: 8.0,
    },
  },
  {
    name: "Jambon Fromage",
    prices: {
      medium: 7.0,
      large: 9.0,
    },
  },
  {
    name: "Mozzarella",
    prices: {
      medium: 6.0,
      large: 8.0,
    },
  },
];

function createNewMenu(originalMenu, priceModifier) {
  let newMenu = originalMenu;
  newMenu = JSON.parse(JSON.stringify(summerMenu));

  for (pizza of newMenu) {
    pizza.prices.medium *= priceModifier;
    pizza.prices.large *= priceModifier;
  }

  return newMenu;
}

let winterMenu = createNewMenu(summerMenu, 1.1);

console.log(summerMenu);
console.log(winterMenu);

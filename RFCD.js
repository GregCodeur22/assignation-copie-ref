const clone = require("rfdc")();

let users = [{ name: "Nicolas" }, { name: "Romain" }, { name: "Laure" }];
let adminUsers = clone(users);

users[0].name = "Pirate";

console.log(users); // Affiche [{name: "Pirate"}, {name: "Romain"}, {name: "Laure"}]
console.log(adminUsers); // Affiche [{name: "Nicolas"}, {name: "Romain"}, {name: "Laure"}]

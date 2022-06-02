// Avec JSON.parse() et JSON.stringify()
let users = [{ name: "Nicolas" }, { name: "Romain" }, { name: "Laure" }];
let adminUsers1 = JSON.parse(JSON.stringify(users));

users[0].name = "Pirate";

console.log(users); // Affiche [{name: "Pirate"}, {name: "Romain"}, {name: "Laure"}]
console.log(adminUsers1); // Affiche [{name: "Nicolas"}, {name: "Romain"}, {name: "Laure"}]

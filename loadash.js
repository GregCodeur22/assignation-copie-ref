// Avec Lodash
import _ from "lodash";

let users = [{ name: "Nicolas" }, { name: "Romain" }, { name: "Laure" }];
let adminUsers = _.cloneDeep(users);

users[0].name = "Pirate";

console.log(users); // Affiche [{name: "Pirate"}, {name: "Romain"}, {name: "Laure"}]
console.log(adminUsers); // Affiche [{name: "Nicolas"}, {name: "Romain"}, {name: "Laure"}]

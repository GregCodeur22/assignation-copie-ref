// le spread opértaor
const arr1 = ["Tom, Gab, Greg"];
const Arr1 = [...arr1];
arr1.push("Laure");

// console.log(arr1);
// console.log(Arr1);

// la méthode slice()
const arr2 = ["Tom, Gab, Greg"];
const Arr2 = arr2.slice(arr2);
arr2.push("Laure");

// console.log(arr2);
// console.log(Arr2);

// object.assign
const arr3 = ["Tom, Gab, Greg"];
const Arr3 = [];
Object.assign(Arr3, arr3);
arr3.push("Laure");

// console.log(arr3);
// console.log(Arr3);

//la méthode Array.form
const arr4 = ["Tom, Gab, Greg"];
const Arr4 = Array.from(arr4);
arr4.push("Lorie");

console.log(arr4);
console.log(Arr4);

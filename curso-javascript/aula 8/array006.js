const number = [{id: 34}];
const string = ["Pedro", "Will", "Wilson"];

number[0].id = 30

let arrayCon = number.concat(string); // Matches arrays.
console.log(arrayCon);


let cut = arrayCon.slice(2); // slice have two funcitons, cut arrays matches and copy arrays.
console.log(cut);

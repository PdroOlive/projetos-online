const prompt = require("readline-sync")


let nameOfPerson = prompt.question("Qual o seu nome?"); // Camel case
let age = Number(prompt.question("Digite sua idade:"));

console.log(typeof(age))
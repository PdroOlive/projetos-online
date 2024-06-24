const prompt = require("readline-sync"); // require é usado para chamar uma lib ja instalada.


let nameOfPerson = prompt.question("Qual o seu nome?"); // Camel case // question vem depois do nome da variavel que atribuimos a lib
let age = Number(prompt.question("Digite sua idade:"));

console.log(typeof(age))
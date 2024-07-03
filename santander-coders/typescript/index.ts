// let num = 10; //Inferência de Tipo

// const pi = 3.1415;

// let nome = "Pedro";

// let boo = true;

// let resultado = num * pi; 

// const userName = prompt("Qual é o seu nome?");

// console.log(userName?.toLowerCase());

// number[] or arrNumber<number>
const arrNumber = [3, 54, 53, 23];

// const misto = ["Pedro", 20, 1.78]; union type

const userAges = [23, 54, 42, 63, 15, 18];

const currentAge = userAges.filter((ages) => ages > 18);//Inferência de tipo função de alta ordem

console.log(currentAge)

interface Person 
{
    nome:string;
    idade:number;
}

const pessoa: Person = 
{
    nome: "Pedro",
    idade: 20,
}


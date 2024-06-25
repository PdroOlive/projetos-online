// function multipleTwo(num1)
// {
//     return (num2) => (num1 + num2) * 2; //Função de alta ordem (Uma função retornando outra função com ações)

// }

// const functionDad = multipleTwo(2); //Passando o parâmetro da função pai

// console.clear();
// console.log(functionDad(2)); // Passando o parâmetro da função filho



const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;


const calcNumber = (num1, num2, operacao) => operacao(num1, num2); // função de alta ordem.


const execFunction = calcNumber(10, 10, (num1, num2) => (num1 * num2) + (2 * num1 * num2));


console.log(execFunction); 

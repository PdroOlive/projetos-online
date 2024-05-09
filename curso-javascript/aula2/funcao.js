let tabuada = 0;
const num = 5;
let i = 0;

function makeMultiplication()
{
    while(i <= 10)
        {
            tabuada = num * i;
            i++;
        }
        return tabuada
}


let number = makeMultiplication();
number = number + 1
console.log(number)

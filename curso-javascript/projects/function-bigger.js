let number1 = 4;
let number2 = 8;

function verifyNumbers()
{
    if(number1 > number2)
    {
        return number1
    }
    else if (number1 === number2)
    {
        return "Valores iguais!!"
    }
    else
    {
        return number2
    }
}
maior = verifyNumbers();
console.log(maior);
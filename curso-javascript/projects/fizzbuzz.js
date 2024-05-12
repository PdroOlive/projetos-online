function fizzBuzz(input)
{
    if(typeof(input) !== "number")
    {
        return `Não é um número`;
    }
    else if(input % 3 === 0 && input % 5 === 0)
    {
        return `FizzBuzz`;
    }
    else if(input % 3 === 0)
    {
        return `Fizz`;
    }
    else if(input % 5 === 0)
    {
        return `Buzz`;
    }
    
    return input;
    
}

const exec = fizzBuzz(11);
console.log(exec);
console.log(typeof(exec))
    
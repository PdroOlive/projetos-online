function multiple(limite)
{
    const multipleThree = 3;
    const multipleFive = 5;
    let soma = 0;
    for(let i = 0; i <= limite; i++)
    {
        if(i % multipleThree === 0)
        {
            soma += i;
        }
        else if (i % multipleFive === 0)
        {
            soma += i;
        }
    }

    return soma

}

const exec = multiple(10)
console.log(exec)
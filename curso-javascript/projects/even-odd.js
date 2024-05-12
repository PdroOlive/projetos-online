function evenOrOdd(limite)
{
    for(let index = 1; index <= limite; index++)
    {
        if(index % 2 === 0)
            console.log(`${index} PAR`);
        else
            console.log(`${index} IMPAR`);     
    }
}

const exec = evenOrOdd(5);

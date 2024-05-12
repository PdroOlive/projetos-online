let soma = 0;
for(let i = 0; i <= 10; i++)
{
    if(i % 3 === 0)
    {    
        console.log(i)
        soma += i
    }
    else if(i % 5 === 0)
    {    
        console.log(i)
        soma += i
    }
}

console.log(soma)
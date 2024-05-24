function checkedNumber(limite)
{
    
    for(let i = 2; i <= limite; i++)
    {
        if(verifyNumber(i)) console.log(i);
    }
}

function verifyNumber(index)
{
    for(let number = 2; number < index; number++)
    {
        if(index % number === 0)
        {
            return false;
        }
    }
    return true
}
const exec = checkedNumber(15);

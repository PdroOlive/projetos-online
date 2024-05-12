
function checkVelocity(velocity)
{
    const velocityMax = 70;
    const kmPoints = 5;
    if(velocity <= 70)
        return `Ok`;

    else if(velocity > velocityMax)
    {
        const pontos = (velocity - velocityMax) / kmPoints;
        if(pontos >= 12)
            return `Carteira Suspensa!`;
        return `Acima do limite mámixo, pontos: ${Math.floor(pontos)}`; 
    }
    
}

const exec = checkVelocity(130);
console.log(exec)
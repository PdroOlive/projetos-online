function countAsterisk(linhas)
{
    let asterisk = ``;
    for(let i = 1; i <= linhas; i++)
    {
        asterisk += `*`
        console.log(asterisk);
    }
}

const exec = countAsterisk(10)

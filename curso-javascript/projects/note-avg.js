const arrayNote = [70, 50, 90];

function avgSchooler(preArray)
{
    const avg = calcAvg(preArray)

    if(avg >= 0 && avg <= 59) return `F`;
    if(avg >= 60 && avg <= 69) return `D`;
    if(avg >= 70 && avg <= 79) return `C`;
    if(avg >= 80 && avg <= 89) return `B`;
    return `A`;

}

function calcAvg(array)
{
    let soma = 0
    for(let i  in array)
    {
        soma += array[i];
    }
    return (soma/array.length).toFixed(1); 
}

const exec = avgSchooler(arrayNote);
console.log(exec)
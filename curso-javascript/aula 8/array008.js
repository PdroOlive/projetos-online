const number = [2, 9, 3, 4, 5, 6, 7];

for(let index in number)
{
    console.log(index, number[index])
}

number.forEach((num, index) => 
{
    console.log(num, index)
})
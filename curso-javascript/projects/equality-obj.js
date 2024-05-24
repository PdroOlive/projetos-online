function registerAddress(road, city, zipCode)
{
    this.road = road;
    this.city = city;
    this.zipCode = zipCode;

}
let exec = new registerAddress("Rua de Óbidos", "Belém", "66020-445")
let execTwo = new registerAddress("Veiga Cabral", "Rio de Janeiro", "66045-540")

function propertyCheck(exec, execTwo)
{
    let equality = {};
    for(let i in exec)
    {
        for(let index in execTwo)
        {
            if(exec[i] === execTwo[index])
            {
                equality = execTwo[i]
                console.log(i, equality, true)
            }
            return console.log(false)
        }
    }
}

function memoryAddressEqual(exec, execTwo)
{
    return console.log(exec === execTwo);
}


propertyCheck(exec, execTwo);
memoryAddressEqual(exec, execTwo)
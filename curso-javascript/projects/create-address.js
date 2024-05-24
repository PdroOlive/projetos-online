function registerAddress(road, city, zipCode)
{
    this.road = road;
    this.city = city;
    this.zipCode = zipCode;

}

let exec = new registerAddress("Rua de Óbidos", "Belém", "66020-445")

function printAddress(obj)
{
    for(let i in obj)
    console.log(`${i} : ${obj[i]}`)
}

printAddress(exec)
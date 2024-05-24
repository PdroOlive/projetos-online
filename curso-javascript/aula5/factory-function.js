const smartphone = {
    brandPhone: "SAMSUNG",
    screenSize: 
    {
        portrait: 155,
        landscape: 78
    },
    batteryPower: 5000,
    ligar: function()
    {
        console.log("Fazendo ligação....")
    }

}

function createSmartpohne(brandPhone, screenSize, batteryPower)
{
    return {
        brandPhone: brandPhone,
        screenSize: screenSize,
        batteryPower: batteryPower,
        ligar()
        {
            console.log("Fazendo ligação....")
        }
    }
}


const exec = createSmartpohne("Apple", 6.5, 5000)
const smart = createSmartpohne("Samsung", 5.5, 4000)
console.log(exec)
console.log(smart)
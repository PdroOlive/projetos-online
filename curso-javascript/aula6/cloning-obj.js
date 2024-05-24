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


const clonateObejct = Object.assign({
    type: "Android"
}, smartphone);

console.log(clonateObejct);


const objectTwo = {...smartphone};
console.log(objectTwo)
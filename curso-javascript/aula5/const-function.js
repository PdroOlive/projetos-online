

function Smartphone(brandPhone, screenSize, batteryPower)
{
    this.brandPhone = brandPhone, 
    this.screenSize = screenSize,
    this.batteryPower = batteryPower,
    this.ligar = function(){
        console.log("Fazendo Ligação...")
    }
}


const exec = new Smartphone("Apple", 5.5, 6000)
console.log(exec)
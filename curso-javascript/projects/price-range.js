function PriceRange(tooltype, minPrice, maxPrice)
{
    this.tooltype = tooltype,
    this.minPrice = minPrice,
    this.maxPrice = maxPrice;
}


function printPriceRange()
{
    let obj = [new PriceRange("Até 100$", "min 0$", "max 100$"), new PriceRange("Até 500$", "min 100$", "max 500$"), new PriceRange("mais 550$", "min 550$", "ILIMITADO ")];
    console.log(obj);
}

printPriceRange()
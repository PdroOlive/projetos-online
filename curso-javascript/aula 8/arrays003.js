const brands = [{id: 1,title: "Bone"}, {id: 4, title: "Luke"}];

const brand = brands.find(function(brand)
{
    return brand.title === "Bone";
});

console.log(brand);

// Method find() return the value of (array(element) or object(element)) if is function of test is true, else return undefined
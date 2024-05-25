const brands = [
    {id:3,title: "Hulk"},
    {id:5, title: "Ant"}
];

const brand = brands.find((brand) => brand.title === "Ant"); // Arrow Function is a way simple of uses function 

console.log(brand)
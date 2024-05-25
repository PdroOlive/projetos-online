const brands = [
    {id:3,title: "Hulk"},
    {id:5, title: "Ant"}
];

const brand = brands.find((brand) => brand.title === "Ant")

console.log(brand)
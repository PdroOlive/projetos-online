// const students = [
//     {nome: "Luiz", media: 78},
//     {nome: "Maisa", media: 85},
//     {nome: "Guilho", media: 45},
//     {nome: "Elon", media: 97},
//     {nome: "Laura", media: 96},
// ];


// const avgStudents = students.filter((student) => 
// {
//     return student.media > 85;
// });


// console.log(avgStudents)

const produtos = [
    {nomeItem: "Suco de Laranja", preco: 7.50, tipo: "Bebida"},
    {nomeItem: "Doritus", preco: 6.90, tipo: "Comida"},
    {nomeItem: "Esponja", preco: 1.50, tipo: "Limpeza"},
    {nomeItem: "Agua", preco: 2.50, tipo: "Bebida"},
    {nomeItem: "Arroz", preco: 5.50, tipo: "Comida"},
    {nomeItem: "Camiseta", preco: 17.50, tipo: "Roupa"},
    {nomeItem: "Creme Skala", preco: 12.50, tipo: "Produto de Beleza"},
    {nomeItem: "Whisky", preco: 99.50, tipo: "Bebida"},
]

const mercado = produtos.filter((item) => 
{
    return item.preco < 10 && item.tipo !== "Bebida";
});

console.log(mercado)



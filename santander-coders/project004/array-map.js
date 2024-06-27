const carrinho = [
    {produto: "Feijão", preco: 7.99, quant: 3},
    {produto: "Arroz", preco: 6.99, quant:3},
    {produto: "Leite 1L", preco: 8.40, quant: 1}
];


const carrinhoNovo = carrinho.map((item) => 
{
    return {...item, total: item.preco * item.quant}
});
console.log(carrinhoNovo)
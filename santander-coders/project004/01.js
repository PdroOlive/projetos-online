const prompt = require("readline-sync");

let valorConta = Number(prompt.question("Digite seu saldo:"))

while(valorConta < 0)
{
    valorConta = Number(prompt.question("Saldo invalido, digite novamente:"))
}

console.log(`SALDO: ${valorConta.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`)


// .toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
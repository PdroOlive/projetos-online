const fs = require("fs");

const file = fs.readFile("./santander-coders/project004/file.json", (erro, ok) =>
{
    if(erro) console.log(`Erro verifique o arquivo!`, erro);
    else
    {
        const obj = JSON.parse(ok); //JSON.parse converte os dados:Buffer do Json para object do JS
        console.log(JSON.stringify(obj));  //JSON.stringify converte os dados JS para JSON.
    } 
});


/*
let hour = 19;


if(hour > 6 && hour < 12)
{
    console.log("Bom Dia!!")
}
else if(hour > 12 && hour < 18)
{
    console.log("Boa Tarde!!")
}
else
{
    console.log("Boa Noite!!")
}*/

let access = "Gerente";

switch (access)
{
    case "comum":
        console.log("Usuário comum");
        break;
    case "Gerente":
        console.log("Usuário gerente");
        break;
    case "Diretor":
        console.log("Usuário diretor");
        break;

    default:
        console.log("Usuário não reconhecido")
}
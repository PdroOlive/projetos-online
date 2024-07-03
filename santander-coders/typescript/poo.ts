interface IPerson 
{
    nome: string;
    idade: number;
    cpf: string;
    conta: number;

    dormir
}


class Pessoa implements IPerson
{
    nome: string;
    idade: number;
    cpf: string;
    conta: number;
    

    constructor(nome: string, idade: number, cpf: string, conta: number)
    {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf; 
        this.conta = conta;
    }

    dormir() 
    {
        console.log("Dormindo....😴😴")
    }
}

const personOne = new Pessoa("Pedro", 20, "334.434.233-90", 4345);

console.log(personOne.dormir());
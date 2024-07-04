interface IPerson 
{
    nome: string;
    idade: number;
    cpf: string;
    conta: number;

    dormir: () => void;
}


class Pessoa implements IPerson
{ 
    nome: string;
    idade: number;
    private _cpf: string;
    conta: number;
    

    constructor(nome: string, idade: number, cpf: string, conta: number)
    {
        this.nome = nome;
        this.idade = idade;
        this._cpf = cpf; 
        this.conta = conta;
    }

    dormir() 
    {
        console.log("Dormindo....😴😴")
    }

    get cpf(): string
    {
        return this._cpf;
    }
    
    set cpf(newCpf: string)
    {
        if(newCpf.length !== 14) throw new Error("CPF INVÁLIDO!!!");

        this._cpf = newCpf;
    }
}

const personOne = new Pessoa("Pedro", 20, "334.434.233-90", 4345);

console.log(personOne.dormir());
console.log(personOne.cpf);
personOne.cpf = "434.679.527-36";
console.log(personOne.cpf);


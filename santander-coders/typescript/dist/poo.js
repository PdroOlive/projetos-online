"use strict";
class Pessoa {
    constructor(nome, idade, cpf, conta) {
        this.nome = nome;
        this.idade = idade;
        this._cpf = cpf;
        this.conta = conta;
    }
    dormir() {
        console.log("Dormindo....😴😴");
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(newCpf) {
        if (newCpf.length !== 14)
            throw new Error("CPF INVÁLIDO!!!");
        this._cpf = newCpf;
    }
}
const personOne = new Pessoa("Pedro", 20, "334.434.233-90", 4345);
console.log(personOne.dormir());
console.log(personOne.cpf);
personOne.cpf = "434.679.527-36";
console.log(personOne.cpf);

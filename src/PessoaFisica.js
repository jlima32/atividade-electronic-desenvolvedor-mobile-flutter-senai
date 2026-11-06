import Pessoa from "./Pessoa";

export default class extends Pessoa
{
    #cpf;
    #dataNascimento;

    constructor(nome, cpf, dataNascimento, endereco)
    {
        super(nome, endereco);
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }

    get cpf()
    {
        return this.cpf;
    }

    set cpf(valor)
    {
        this.#cpf = valor;
    }

    get dataNascimento()
    {
        return this.dataNascimento;
    }

    set dataNascimento(valor)
    {
        this.#dataNascimento = valor;
    }

    apresentar() 
    {
        return `PESSOA FÍSICA\n${super.apresentar()}\nCPF: ${this.cpf}\nNascimento: ${this.dataNascimento.toLocaleDateString("pt-BR")}`;
    }
}
import Pessoa from "./Pessoa.js";

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
        return this.#cpf;
    }

    set cpf(valor)
    {
        const somenteDigitos = String(valor).replace(/\D/g, "");
        if (!/^\d{11}$/.test(somenteDigitos)) {
            throw new Error("O CPF deve conter exatamente 11 dígitos.");
        }
        this.#cpf = valor;
    }

    get dataNascimento()
    {
        return this.#dataNascimento;
    }

    set dataNascimento(valor)
    {
        const data = valor instanceof Date ? new Date(valor) : new Date(`${valor}T00:00:00`);
        if (Number.isNaN(data.getTime())) {
            throw new Error("A data de nascimento informada não é válida.");
        }
        
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        if (data > hoje) throw new Error("A data de nascimento não pode estar no futuro.");
        
        this.#dataNascimento = valor;
    }

    apresentar() 
    {
        return `${super.apresentar()}\nCPF: ${this.cpf}\nNascimento: ${new Date(this.dataNascimento).toLocaleDateString("pt-BR")}`;
    }
}
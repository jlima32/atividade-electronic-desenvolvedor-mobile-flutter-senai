export default class Pessoa
{
    #nome;
    #endereco;

    constructor(nome, endereco)
    {
        this.nome = nome;
        this.endereco = endereco;
    }

    get nome()
    {
        return this.nome;
    }

    set nome(valor)
    {
        this.#nome = valor;
    }

    get endereco()
    {
        return this.endereco;
    }

    set endereco(valor)
    {
        this.#endereco = endereco;
    }
}
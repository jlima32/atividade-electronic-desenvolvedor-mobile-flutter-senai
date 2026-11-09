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
        return this.#nome;
    }

    set nome(valor)
    {
        if(valor.length <= 3)
        {
            throw new Error("o nome deve ter ao menos 3 caracteres");
        }
        this.#nome = valor;
    }

    get endereco()
    {
        return this.#endereco;
    }

    set endereco(valor)
    {
        this.#endereco = valor;
    }

    apresentar() 
    {
        return `Nome: ${this.nome}\nEndereço: ${this.endereco}`;
    }
}
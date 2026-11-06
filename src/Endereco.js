export default class Endereco
{
    #logradouro;
    #numero;
    #cidade;
    #uf;

    constructor(logradouro, numero, cidade, uf)
    {
        this.logradouro = logradouro;
        this.numero     = numero;
        this.cidade     = cidade;
        this.uf         = uf;
    }

    get logradouro()
    {
        return this.#logradouro;
    }

    set logradouro(valor)
    {
        this.#logradouro = valor.trim();
    }

    get numero()
    {
        return this.#numero;
    }
    set numero(valor)
    {
        this.#numero = valor;
    }

    get cidade()
    {
        return this.#cidade;
    }

    set cidade(valor)
    {
        this.#cidade = valor.trim();
    }

    get uf()
    {
        return this.#uf;
    }
    set uf(valor)
    {
        this.#uf = valor;
    }

    toString() {
        return `${this.#logradouro}, ${this.#numero} - ${this.#cidade}/${this.#uf}`;
    }



}
import Pessoa from "./Pessoa.js";

export default class PessoaJuridica extends Pessoa
{
    #cnpj;
    #razaoSocial;

    constructor(nome, cnpj, razaoSocial, endereco)
    {
        super(nome, endereco);
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
    }

    get cnpj()
    {
        return this.#cnpj;
    }

    set cnpj(valor)
    {
        this.#cnpj = valor;
    }

    get razaoSocial()
    {
        return this.#razaoSocial;
    }

    set razaoSocial(valor)
    {
        this.#razaoSocial = valor;
    }

    apresentar() 
    {
        return `\n${super.apresentar()}\nCNPJ: ${this.cnpj}\nRazão social: ${this.razaoSocial}`;
    }
}
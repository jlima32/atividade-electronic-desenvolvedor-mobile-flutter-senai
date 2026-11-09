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
        const somenteDigitos = String(valor).replace(/\D/g, "");
        if (!/^\d{14}$/.test(somenteDigitos)) {
            throw new Error("O CNPJ deve conter exatamente 14 dígitos.");
        }
        this.#cnpj = valor;
    }

    get razaoSocial()
    {
        return this.#razaoSocial;
    }

    set razaoSocial(valor)
    {
        if (valor.length < 1)
        {
            throw new Error("A razão social é obrigatória.") 
        }
        
        this.#razaoSocial = valor;
    }

    apresentar() 
    {
        return `\n${super.apresentar()}\nCNPJ: ${this.cnpj}\nRazão social: ${this.razaoSocial}`;
    }
}
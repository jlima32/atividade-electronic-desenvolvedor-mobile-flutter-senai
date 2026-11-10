import Endereco from "./src/Endereco.js";
import PessoaFisica from "./src/PessoaFisica.js";
import PessoaJuridica from "./src/PessoaJuridica.js";

// cria o array para guardar os dados
const clientes = [];

// função para cadastrar cliente
function cadastrarCliente(tipo, dadosCliente, dadosEndereco)
{
    try
    {
        // inicia a variável para receber o cliente
        let cliente;

        // 
        const endereco = new Endereco(dadosEndereco.logradouro, dadosEndereco.numero, dadosEndereco.cidade, dadosEndereco.uf);
        if(tipo.toLowerCase() == "pf")
        {
            cliente = new PessoaFisica(dadosCliente.nome, dadosCliente.cpf, dadosCliente.dataNascimento, endereco);
        }
        else if(tipo.toLowerCase() == "pj")
        {
            cliente = new PessoaJuridica(dadosCliente.nome, dadosCliente.cnpj, dadosCliente.razaoSocial, endereco);
        }
        clientes.push(cliente);
        console.log(`Cliente: ${cliente.nome} cadastrado com sucesso`)    }
    catch(erro)
    {
        console.log(`Cliente não cadastrado: ${erro.message}` );
    }
}


//Pessoa Física Válida
cadastrarCliente("PF", 
    {
        "nome": "Maria Silva",
        "cpf": "123.456.789-00",
        "dataNascimento": "2017-12-02",
    }
    ,
    {
        "logradouro": "Rua das Flores",
        "numero": "123",
        "cidade": "São Paulo",
        "uf": "SP"
    }
)



//Pessoa Jurídica Válida
cadastrarCliente("pj", 
    {
        "nome": "Loja XPTO",
        "cnpj": "12.345.678/0001-12",
        "razaoSocial": "XPTO Electric",
    }
    ,
    {
        "logradouro": "Rua das Margaridas",
        "numero": "78",
        "cidade": "Taboão da Serra",
        "uf": "SP"
    }
)

//Pessoa Física Inválida
cadastrarCliente("PF", 
    {
        "nome": "Maria Silva",
        "cpf": "123.222.333-77",
        "dataNascimento": "2035-04-20",
    }
    ,
    {
        "logradouro": "Rua das Flores",
        "numero": "123",
        "cidade": "São Paulo",
        "uf": "SP"
    }
)


//Pessoa Jurídica Inválida
cadastrarCliente("pj", 
    {
        "nome": "Loja ABCDF",
        "cnpj": "72.743.340001-35",
        "razaoSocial": "ABCD Electric",
    }
    ,
    {
        "logradouro": "Rua da aviação",
        "numero": "22",
        "cidade": "Campinas",
        "uf": "SP"
    }
)


function listarClientes()
{
    if (clientes.length < 1)
    {
        console.log("SEM CLIENTES ATIVOS PARA MOSTRAR");
    }
    else
    {
        console.log("\n#### CLIENTES ATIVOS ####\n")
        for(let i = 0; i < clientes.length; i++)
        {
            console.log(clientes[i].apresentar());
            console.log("------------------")
        }
    }
}

listarClientes();


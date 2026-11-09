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


cadastrarCliente("PF", 
    {
        "nome": "Maria Silva",
        "cpf": "123",
        "dataNascimento": "1995-04-20",
    }
    ,
    {
        "logradouro": "Rua das Flores",
        "numero": "123",
        "cidade": "São Paulo",
        "uf": "SP"
    }
)

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


cadastrarCliente("pj", 
    {
        "nome": "Loja XPTO",
        "cnpj": "72.743.347/0001-35",
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


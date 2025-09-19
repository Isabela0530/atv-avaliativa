const clientes = require("../data/clientes.data");

//req -> Request(Requisao)
//res -> Response(Resposta)
const listar = (req, res) => {
    res.status(200).send(clientes).end();
};

const buscar = (req, res) => {
    // /clientes/id
    const idcliente = req.params.id;

    var user ="não encontrado";

    clientes.forEach((cliente, index) => {
        if(cliente.id === idcliente) {
            user = cliente;
        }
    });

    res.send(user).end();
};

const cadastrar = (req, res) => {
    const novocliente = req.body;
    clientes.push(novocliente);
    res.status(201).send("Cadastrado com Sucesso !").end();
};

const apagar = (req, res) => {
    // /clientes/:id -> parametro
    const idcliente = req.params.id;

    var indice = -1;

    clientes.forEach((cliente, index) => {
        if(cliente.id === idcliente) {
            indice = index;
        }
    });

    if(indice === -1) {
        res.status(404).end();
    }else {
        clientes.splice(indice, 1);
        res.status(204).end();
    }
}

const alterar = (req, res) => {
    const clienteAlterado = req.body;

    var encontrei = false;
    clientes.forEach((cliente, index) => {
        if(cliente.id === clienteAlterado.id) {
            clientes[index] = clienteAlterado;
            encontrei = true;
        }
    });

    if(encontrei === false) {
        res.status(404),end();
    }else {
        res.status(201).end();
    }

};

const atualizar = (req, res) => {
    const idcliente = req.params.id;
    const novosDados = req.body;

    var indice = -1;

    clientes.forEach((cliente, index) => {
        if(cliente.id === idcliente) indice = index;
    });

    if(indice === -1) {
        res.status(404).end();
        } else {
            Object.keys(novosDados).forEach((key) => {
                clientes[indice][key] = novosDados[key];
            });
            res.status(204).end();
        }
    };


module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar,
    alterar,
    atualizar
};

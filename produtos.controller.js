const db = require("../data/connection");

const cadastrar = (req, res) => {
    const novoProduto = req.body;
    produtos.push(novoProduto);
    res.status(201).send("Produto cadastrado com sucesso!").end();
};

const listar = (req, res) => {
    res.status(200).send(produtos).end();
};

const atualizar = (req, res) => {
    const idProduto = req.params.id;
    const novosDados = req.body;

    var indice = -1;

    produtos.forEach((produto, index) => {
        if (produto.id === idProduto) indice = index;
    });

    if (indice === -1) {
        res.status(404).end();
    } else {
        Object.keys(novosDados).forEach((key) => {
            produtos[indice][key] = novosDados[key];
        });
        res.status(204).end();
    }
};

const apagar = (req, res) => {
    const idProduto = req.params.id;

    var indice = -1;

    produtos.forEach((produto, index) => {
        if (produto.id === idProduto) indice = index;
    });

    if (indice === -1) {
        res.status(404).end();
    } else {
        produtos.splice(indice, 1);
        res.status(204).end();
    }
};

module.exports = {
    cadastrar,
    listar,
    atualizar,
    apagar
};

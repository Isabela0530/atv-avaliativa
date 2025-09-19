const produtos = require("../data/produtos.data");

const listar = (req, res) => {
    res.status(200).send(produtos).end();
};

const buscar = (req, res) => {
    const idprodutos = req.params.id;

    var user = "não encontrado";

    produtos.forEach((produto, index) => {
        if(produto.id === idprodutos) {
            user = produto;
        }
    });

    res.send(user).end();
};

const cadastrar = (req, res) => {
    const novoproduto = req.body;
    produtos.push(novoproduto);
    res.status(201).send("Cadastrado com Sucesso !").end();
};

const apagar = (req, res) => {
    const idprodutos = req.params.id;

    var indice = -1;

    produtos.forEach((produto, index) => {
        if(produto.id === idprodutos) {
            indice = index;
        }
    });

    if(indice === -1) {
        res.status(404).end();
    }
    else{
        produtos.splice(indice, 1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    const produtoalterado = req.body;

    produtos.forEach((livro, index) => {
        if(produto.id === produtoalterado.id) {
            produtos[index] = produtoalterado;
            encontrei = true;
        }
    });

    if(encontrei === false) {
        res.status(404).end();
    }
    else {
        res.status(201).end();
    }
};

const atualizar = (req, res) => {
    const idprodutos = req.params.id;
    const novosdados = req.body;

    var indice = -1;

    produtos.forEach((produto, index) => {
        if(produto.id === produtos) indice = index;
    });

    if(indice === -1) {
        res.status(404).end();
    }
    else {
        Object.keys(novosdados).forEach((key) => {
        produtos[indice][key] = novosdados[key];
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
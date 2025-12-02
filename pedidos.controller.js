const db = require("../data/connection");

const cadastrar = async (req, res) => {
    const {data, quantidade, id_aluno, id_produto} = req.body;
    
    const novoPedido = await db.query("INSERT INTO pedidos VALUES(DEFAULT, ?, ?, ?, ?)", [data, quantidade, id_aluno, id_produto])
    
    res.send({
        id: novoPedido[0].insertId,
        data: data,
        quantidade: quantidade,
        id_aluno: id_aluno,
        id_produto: id_produto
    });
};

const listar = (req, res) => {
    res.status(200).send(pedidos).end();
};

const atualizar = async (req, res) => {
    const { id, data, quantidade, id_aluno, id_produto, nome, turma } = req.body;

    try {
        const updatePedido = await db.query(
            "UPDATE pedidos SET data = ?, quantidade = ?, id_aluno = ?, id_produto = ? WHERE id = ?",
            [data, quantidade, id_aluno, id_produto, id]
        );

        const updateAluno = await db.query(
            "UPDATE aluno SET nome = ?, turma = ? WHERE id = ?",
            [nome, turma, id_aluno]
        );

        const info = { msg: "" };

        if (updateAluno[0].affectedRows === 0) {
            info.msg = "Nenhum aluno encontrado";
        } else {
            info.msg = "Atualização realizada com sucesso";
        }

        res.status(200).json(info);

    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};


const apagar = (req, res) => {
    const idPedido = req.params.id;

    var indice = -1;

    pedidos.forEach((pedido, index) => {
        if (pedido.id === idPedido) indice = index;
    });

    if (indice === -1) {
        res.status(404).end();
    } else {
        pedidos.splice(indice, 1);
        res.status(204).end();
    }
};

module.exports = {
    cadastrar,
    listar,
    atualizar,
    apagar
};

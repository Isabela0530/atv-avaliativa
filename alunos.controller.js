const db = require("../data/connection");


const cadastrar = async (req, res) => {
    const novoAluno = req.body;
    alunos.push(novoAluno);
    res.status(201).send("Cadastrado com Sucesso !").end();
};

const listar = (req, res) => {
    res.status(200).send(alunos).end();
};

const atualizar = (req, res) => {
    const id = req.params.id;
    const { nome, turma } = req.body;

    const sql = "UPDATE alunos SET nome = ?, turma = ? WHERE id = ?";

    db.query(sql, [nome, turma, id], (erro, resultado) => {
        if (erro) {
            return res.status(500).send("Erro ao atualizar aluno");
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).send("Aluno não encontrado");
        }

        return res.status(200).send("Aluno atualizado com sucesso!");
    });
};

const apagar = (req, res) => {
    const idAluno = req.params.id;

    var indice = -1;

    alunos.forEach((aluno, index) => {
        if(aluno.id === idAluno) {
            indice = index;
        }
    });

    if(indice === -1) {
        res.status(404).end();
    }else {
        alunos.splice(indice, 1);
        res.status(204).end();
    }
}

module.exports = {
    cadastrar,
    listar,
    atualizar,
    apagar
};

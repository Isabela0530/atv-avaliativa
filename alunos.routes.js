const express = require("express");
const router = express.Router();

const AlunosController = require("../controllers/alunos.controller");

router.post("/aluno", AlunosController.cadastrar);
router.get("/alunos", AlunosController.listar);
router.put("/aluno/:id", AlunosController.atualizar);
router.delete("/aluno/:id", AlunosController.apagar);

module.exports = router;

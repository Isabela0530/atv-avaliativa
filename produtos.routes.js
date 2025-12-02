const express = require("express");
const router = express.Router();

const ProdutosControllers = require("../controllers/produtos.controller");

router.post("/produto", ProdutosController.cadastrar);
router.get("/produtos", ProdutosController.listar);
router.put("/produto/:id", ProdutosController.atualizar);
router.delete("/produto/:id", ProdutosController.apagar);

module.exports = router;

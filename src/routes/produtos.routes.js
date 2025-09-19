const express = require("express");
const router = express.Router();

const produtoscontroller = require("../controllers/produtos.controller");

router.get("/produtos", produtoscontroller.listar);
router.get("/produtos/:id", produtoscontroller.buscar);
router.post("/produtos", produtoscontroller.cadastrar);
router.delete("/produto/:id", produtoscontroller.apagar);
router.put("/produto", produtoscontroller.alterar);
router.patch("/produto/:id", produtoscontroller.atualizar);

module.exports = router;
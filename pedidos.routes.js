const express = require("express");
const router = express.Router();

const PedidosControllers = require("../controllers/pedidos.controller");

router.post("/pedido", PedidosController.cadastrar);
router.get("/pedidos", PedidosController.listar);
router.put("/pedido/:id", PedidosController.atualizar);
router.delete("/pedido/:id", PedidosController.apagar);

module.exports = router;

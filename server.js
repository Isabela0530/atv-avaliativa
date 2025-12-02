const express = require("express"); 
const cors = require("cors");

const AlunosRoutes = require("./src/routers/alunos.routes");

const app = express();

app.use(express.json());
app.use(cors()); 

app.use(AlunosRoutes);

app.listen(3000, () => {
    console.log("Servidor online na porta 3000");
});
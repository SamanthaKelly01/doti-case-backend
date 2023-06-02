const express = require("express");
const rotas = require("./routes");
const cors = require ("cors");
const bodyparser = require("body-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());			
app.use(rotas);
app.use("*", (req, res) => {
    res.status(404).json({message: `Rota '${req.baseUrl}' não encontrada` })
});

module.exports = app; 

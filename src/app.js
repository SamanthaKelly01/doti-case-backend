const express = require("express");
const rotas = require("./routes");
const cors = require ("cors");
const bodyparser = require("body-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extend: true}));
app.use(cors());			
app.use(rotas);
app.use("*", (req, res) => {
    res.status(404).json({message: `Rota '${req.baseUrl}' não encontrada` })
});

module.exports = app; 


// app.get("", (req, res) => {
//     return res.json({
//         message: "teste"
//     })
// })

// app.get("/home", (req, res) => {
//     return res.json({
//         message: "Teste home"
//     })
// })

// app.get("/produtos", (req, res) => {
//     return res.json({
//         message: "Teste produtos"
//     })
// })

// app.get("/blog", (req, res) => {
//     return res.json({
//         message: "Teste blog"
//     })
// })

// app.get("/login", (req, res) => {
//     return res.json({
//         message: "Teste login"
//     })
// })

// app.get("/cadastro", (req, res) => {
//     return res.json({
//         message: "Teste cadastro"
//     })
// })

// app.get("/perfil", (req, res) => {
//     return res.json({
//         message: "Teste perfil"
//     })
// })




//3IlMVrOnltLCSdX6
//mongodb+srv://samanthak2002:<password>@pontodoti.o6h56fs.mongodb.net/



// import express from "express";
// import cors from "cors";

// const server = express();
// server.use(cors());
// server.use(express.json());

// const port = process.env.PORT || 5000;
// server.listen(port, () => console.log("Server is running on port: " + port));

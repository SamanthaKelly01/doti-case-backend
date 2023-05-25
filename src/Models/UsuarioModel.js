const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema ({
    nome: String,
    email: String,
    senha: String,
    endereco: String,
    descricao: String,
})

const UsuarioModel = mongoose.model('usuarios', UsuarioSchema);

module.exports = UsuarioModel;
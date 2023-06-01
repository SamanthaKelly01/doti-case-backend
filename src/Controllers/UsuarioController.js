const UsuarioModel = require("../Models/UsuarioModel");

class UsuarioController {

    async create(req, res){
        try {
            const usuario = await UsuarioModel.create(req.body);
            const { senha, ...novoUsuario} = usuario.toObject();

            res.status(200).json(novoUsuario);
            
        } catch (error) {
            console.log(error);
            if (error.keyPattern.email) {
                return res.status(500).json({message: "Oops! Email já registrado...", error: error.message });
            }
            res.status(500).json({message: "Oops! Nome de usuário já registrado...", error: error.message });
        }
        
    }

    async read(req, res){ 
        try {
            const usuarios = await UsuarioModel.find();

            res.status(200).json(usuarios);
            
        } catch (error) {
            res.status(500).json({message: "Oops!, Algo deu errado...", error: error.message });   
        }
        
    }


    async delete (req, res) {
        try{
            const { id } = req.params;
            const usuarioEncontrado = await UsuarioModel.findById(id);
    
            if(!usuarioEncontrado) 
                return res.status(404).json({message: "Usuário não encontrado" });
    
            await usuarioEncontrado.deleteOne();
    
            res.status(200).json({message: "Usuário deletado com sucesso!"});
    
        }catch (error) {
            
            res.status(500).json({message: "Oops!, Algo deu errado...", error: error.message });
        }
    }

    async update (req, res) {
        try{
            const { id } = req.params;
            const usuarioEncontrado = await UsuarioModel.findById(id);
    
            if(!usuarioEncontrado) 
                return res.status(404).json({message: "Usuário não encontrado" });
    
            const usuario = await usuarioEncontrado.set(req.body).save();
    
            res.status(200).json(usuario);
    
        }catch (error) {
            
             res.status(500).json({message: "Oops!, Algo deu errado...", error: error.message });
        }
    }

}

module.exports = new UsuarioController();
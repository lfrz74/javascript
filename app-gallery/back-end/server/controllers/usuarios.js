const usuarios = require('../models').usuarios;

function crearUsuario(req,res){
    usuarios.create(req.body)
    .then(usuario => {
        res.status(200).send({usuario});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function login(req,res){
    usuarios.findOne({
        where:{
            usuario:req.body.usuario,
            password:req.body.password
        }
    })
    .then(usuario => {
        if (usuario){
            res.status(200).send({usuario});
        }
        else{
            res.status(200).send({message:'Usuario no encontrado..!'});
        }
        
        
    })
    .catch(err=>{
        res.status(500).send({message:'Ocurrió un error al buscar el suaurio'});
    })
}
module.exports={
    crearUsuario,
    login
}
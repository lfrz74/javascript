const usuarios = require('../models').usuarios;
const jwt = require('../services/jwt');
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
            if (req.body.token == 'true'){
                res.status(200).send({
                    token: jwt.createToken(usuario)
                });
            }
            else{
                res.status(200).send({
                    usuario: usuario
                });
            }
        }
        else{
            res.status(401).send({message:'Usuario no encontrado..!'});
        }
    })
    .catch(err=>{
        res.status(500).send({message:'Ocurrió un error al buscar el usuario'});
    })
}
module.exports={
    crearUsuario,
    login
}
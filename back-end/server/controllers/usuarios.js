const usuarios =  require('../models').usuarios;

function crearUsuario (req,res){
    usuarios.create(req.body)
    .then(usuario =>{
        res.status(200).send({usuario});
    })
    .catch(err => {
        res.status(500).send({err});
    })
}

module.exports = {
    crearUsuario
}
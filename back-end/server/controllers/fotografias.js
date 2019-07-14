const fotografias = require('../models').fotografias;
const jwt = require('../services/jwt');

function createFotografia(req, res){
    var body = req.body;
    fotografias.create(body)
    .then(foto => {
        res.status(200).send({foto});
    })
    .catch(err=>{
        res.status(500).send({message:'Ocurrió un error al guardar la fotografía'});
    });
}

function updateFotografia(req, res){
    var id = req.params.id;
    var body = req.body;

    fotografias.findByPk(id)
    .then(foto=>{
        foto.update(body)
        .then(()=>{
            res.status(200).send({foto});
        })
        .catch(err=>{
            res.status(500).send({message:'Ocurrió un error al actualizar fotografía'});
        });
    })
    .catch(err=>{
        res.status(500).send({message:'Ocurrió un error al buscar fotografía'})
    });
}

module.exports = {
    createFotografia,
    updateFotografia
}
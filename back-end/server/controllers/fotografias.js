const fotografias = require('../models').fotografias;
const jwt = require('../services/jwt');
const fs = require('fs'); //manejador de archivos
const thumb1 = require('node-thumbnail').thumb;
const path = require('path');

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

function uploadFotografia(req, res){
    var id = req.params.id;

    if (req.files){ //ver si en el req viene un archivo
        var file_path = req.files.foto.path;
        var file_split = file_path.split('\\');
        var file_name = file_split[3];
        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];
        var newPath = './server/uploads/fotografias/';
        var thumbPath = './server/uploads/fotografias/thumbs/';

        if(file_ext == 'jpg'){
            var foto = {};
            foto.imagen = file_name;
            fotografias.findByPk(id)
            .then(foto2 =>{
                //Cuando voy a actualizar una foto, primero la borro al igual q a la thumbnail
                fs.exists(path.resolve(newPath + foto2.imagen), (exists) =>{
                    if (exists){
                        //console.log(newPath + foto2.imagen);
                        fs.unlink(newPath + foto2.imagen, err => {
                            if (err){
                            }
                        });
                    }
                });
                fs.exists(path.resolve(thumbPath + foto2.imagen), (exists) =>{
                    if (exists){
                        //console.log(thumbPath + foto2.imagen);
                        fs.unlink(thumbPath + foto2.imagen, err => {
                            if (err){
                            }
                        });
                    }
                });
            });

            fotografias.findByPk(id)
            .then(foto1 =>{
                foto1.update(foto)
                .then(()=>{
                    newPath = './server/uploads/fotografias/' + file_name;
                    thumb1({
                        source: path.resolve(newPath),
                        destination: path.resolve(thumbPath),
                        width: 200,
                        suffix:''
                    }).then(()=>{
                        res.status(200).send({foto1});
                    }).catch(err=>{
                        res.status(500).send({message:'Ocurrió un error al crear el thumbnail'});            
                    })
                })
                .catch(err => {
                    fs.unlink(file_path, err => {
                        if (err){
                            res.status(500).send({message:'Ocurrió un error al eliminar la foto'});            
                        }
                    });
                    res.status(500).send({message:'Ocurrió un error al actualizar la foto'});            
                })
            })
            .catch(err => {
                fs.unlink(file_path, err => {
                    if (err){
                        res.status(500).send({message:'Ocurrió un error al eliminar la foto'});            
                    }
                });
                res.status(500).send({message:'No existe la fotografía.'});        
            })
        }
        else{
            fs.unlink(file_path, err => {
                if (err){
                    res.status(500).send({message:'Ocurrió un error al eliminar la foto'});            
                }
            });
            res.status(500).send({message:'Extensión no permitida.'});        
        }
    }else{
        res.status(400).send({message:'Debe seleccionar una fotografía'});
    }
}

function getFotografia(req, res){
    var foto1 = req.params.fotografia;
    var thumb1 = req.params.thumb;
    if (thumb1=='false')
        var path_foto = ('./server/uploads/fotografias/' + foto1);
    else if (thumb1=='true')
        var path_foto = ('./server/uploads/fotografias/thumbs/' + foto1);

    
    fs.exists(path_foto, (exists)=> {
        if (exists)
        {
            res.sendFile(path.resolve(path_foto));

        }else{
            res.status(404).send({message:'Fotografía no encontrada..!'});
        }
    })

}

function getAll(req, res){
    fotografias.findAll({
        where:{
            activo:true
        },
        order: [
            ['numero', 'ASC']
        ]
    })
    .then(fotos => {
        res.status(200).send({fotos});
    })
    .catch(err => {
        res.status(500).send({message:'Ocurrió un error al buscar las fotografías..!'});
    })
}

function getAllAdmin(req, res){
    fotografias.findAll({
        order: [
            ['numero', 'ASC']
        ]
    })
    .then(fotos => {
        res.status(200).send({fotos});
    })
    .catch(err => {
        res.status(500).send({message:'Ocurrió un error al buscar las fotografías..!'});
    })
}
function getFotografiabyId(req, res){
    var id = req.params.id;
    var body = req.body;

    fotografias.findByPk(id)
    .then(foto=>{
        res.status(200).send({foto});
    })
    .catch(err=>{
        res.status(500).send({message:'No se encontró la fotografía'})
    });
}

module.exports = {
    createFotografia,
    updateFotografia,
    uploadFotografia,
    getFotografia,
    getAll,
    getAllAdmin,
    getFotografiabyId
}
var nJwt = require('njwt');
var config = require('../config/config');
var secret = config.token_secret;

//middleware: bloque de código q se ejecuta entre cada petición del usuario
function auth(req, res, next){
    if(!req.headers.authorization){
        return res.status(403).send({message:'La petición no tiene la cabecera de autenticación..!'});
    }

    var token = req.headers.authorization.replace(/['"]+/g,'');
    var payload = nJwt.verify(token, secret, (err, verifiedJwt) => {
        if (err){
            return res.status(401).send({message: 'Acceso no autorizado..!'});
        }else{
            next();//para que prosiga la ejecución
        }
    });
}

module.exports = {
    auth
}
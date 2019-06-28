var nJwt = require('njwt');
var config = require('../config/config');
var secret = config.token_secret;
exports.createToken = (usuario) => {
    var params = {
        sub:usuario.id,
        usuario: usuario.usuario,
        id_rol:usuario.id_rol
    }
    var jwt = nJwt.create(params, secret);

    var hora = new Date();
    hora.setHours(hora.getHours()+1);
    jwt.setExpiration(hora);

    var token = jwt.compact(); //base64
    return token;
}